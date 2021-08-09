<template>
  <div class="row" style="width: 100%">
    <tab-component></tab-component>
    <div class="col-md-10 offset-md-1">
      <div class="row vertical-middle">
        <h4 class="label">
          Mostrar favoritos:
          <q-btn class="button-float btn-fav" round size="sm" @click="showFavorites">
            <q-icon class="disabled-color" name="start" size="xs" />
          </q-btn>
        </h4>
      </div>
      <div class="row">
        <div v-if="characterList.length > 0" class="row q-gutter-md justify-between">
          <div class="col-md-3" v-for="character in characterList" :key="character.id">
            <character-card v-bind="character" @show-details-modal="showDetailsModal"/>
          </div>
          <div class="col-md-3"></div>
        </div>
        <no-result-card v-else class="col-md-12"/>
        <character-details-dialog v-model:character="actualCharacter" v-model:episodes-list="episodesList"
          v-model:especial-character-list="especialCharacterList"/>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import NoResultCard from '@/components/NoResultCard.vue'
import CharacterDetailsDialog from '@/components/CharacterDetailsDialog.vue'

export default {
  name: 'CharacterList',
  components: {
    CharacterCard,
    NoResultCard,
    CharacterDetailsDialog
  },
  props: {},
  data () {
    return {
      actualCharacter: {},
      episodesList: [],
      especialCharacterList: []
    }
  },
  computed: {
    characterList () {
      return this.$store.getters.getList
    }
  },
  methods: {
    async showDetailsModal (id) {
      this.actualCharacter = this.characterList.find(character => character.id === id)
      const episodeIdList = this.extractIds(this.actualCharacter.episode)
      const { data } = await this.axios.get(this.API + '/episode/' + episodeIdList)
      if (episodeIdList.length > 1) {
        this.episodesList = data
      } else {
        this.episodesList = new Array(data)
      }
      this.getEspecialCharactersList()
      this.$store.commit('setVisible')
    },
    extractIds (list) {
      return Array.from(list, x => x.substring(x.lastIndexOf('/') + 1, x.length))
    },
    async getEspecialCharactersList () {
      const characters = new Set()
      this.episodesList.forEach(function (episode) {
        characters.add(episode.characters[Math.floor(Math.random() * episode.characters.length)])
      })
      const characterIdsList = this.extractIds(characters)
      const topSix = characterIdsList.slice(0, characterIdsList.length > 6 ? 6 : characterIdsList.length)
      const { data } = await this.axios.get(this.API + '/character/' + topSix)
      if (characterIdsList.length > 1) {
        this.especialCharacterList = data
      } else {
        this.especialCharacterList = new Array(data)
      }
    },
    showFavorites () {
      this.$store.commit('changeFilter')
    }
  },
  mounted () {
    this.$store.dispatch('loadList')
  }
}
</script>

<style scoped>
.btn-fav {
  position: relative;
}
.label {
  font-size: 14px;
  line-height: 17px;
}
</style>
