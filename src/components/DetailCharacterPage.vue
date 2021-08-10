<template>
  <div class="row justify-center q-gutter-xs">
    <q-card style="max-width: 1300px" v-if="dataReady">
      <character-details-dialog-header v-bind:character="character" v-bind:dialog="false"/>
      <character-details-dialog-info v-bind:character="character" />
      <q-separator spaced inset />
      <characterDetailsDialogEpisodes v-bind:episodes-list="episodesList" />
      <q-separator spaced inset />
      <character-details-dialog-characteres v-bind:character-list="especialCharacterList" />
    </q-card>
  </div>
  <FooterPage/>
</template>

<script>
import CharacterDetailsDialogHeader from '@/components/dialog-details/CharacterDetailsDialogHeader.vue'
import CharacterDetailsDialogInfo from '@/components/dialog-details/CharacterDetailsDialogInfo.vue'
import CharacterDetailsDialogEpisodes from '@/components/dialog-details/CharacterDetailsDialogEpisodes.vue'
import CharacterDetailsDialogCharacteres from '@/components/dialog-details/CharacterDetailsDialogCharacteres.vue'
import FooterPage from '@/components/FooterPage.vue'
import CharacterService from '@/hooks/characterService'

export default {
  name: 'DetailCharacterPage',
  mixins: [CharacterService],
  components: {
    CharacterDetailsDialogHeader,
    CharacterDetailsDialogInfo,
    CharacterDetailsDialogEpisodes,
    CharacterDetailsDialogCharacteres,
    FooterPage
  },
  data () {
    return {
      character: {},
      episodesList: [],
      especialCharacterList: [],
      dataReady: false
    }
  },
  props: ['id'],
  async mounted () {
    const { data } = await this.axios.get(this.API + '/character/' + this.id)
    this.character = data
    const episodeIdList = this.extractIds(this.character.episode)
    this.episodesList = await this.getEpisodeList(episodeIdList)
    this.especialCharacterList = await this.getEspecialCharactersList(this.episodesList)
    this.dataReady = true
  }
}
</script>
