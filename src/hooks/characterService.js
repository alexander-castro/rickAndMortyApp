export default {
  methods: {
    extractIds (list) {
      return Array.from(list, x => x.substring(x.lastIndexOf('/') + 1, x.length))
    },
    async getEpisodeList (episodeIdList) {
      let episodesList = []
      const { data } = await this.axios.get(this.API + '/episode/' + episodeIdList)
      if (episodeIdList.length > 1) {
        episodesList = data
      } else {
        episodesList = new Array(data)
      }
      return episodesList
    },
    async getEspecialCharactersList (episodesList) {
      const characters = new Set()
      episodesList.forEach(function (episode) {
        characters.add(episode.characters[Math.floor(Math.random() * episode.characters.length)])
      })
      const characterIdsList = this.extractIds(characters)
      const topSix = characterIdsList.slice(0, characterIdsList.length > 6 ? 6 : characterIdsList.length)
      let especialCharactersList = []
      const { data } = await this.axios.get(this.API + '/character/' + topSix)
      if (characterIdsList.length > 1) {
        especialCharactersList = data
      } else {
        especialCharactersList = new Array(data)
      }
      return especialCharactersList
    }
  }
}
