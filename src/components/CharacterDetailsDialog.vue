<template>
  <q-dialog v-model="$store.state.visible">
    <q-card style="max-width: 760px">
      <character-details-dialog-header v-bind:character="character"/>
      <character-details-dialog-info v-bind:character="character"/>
      <q-separator spaced inset />
      <characterDetailsDialogEpisodes v-bind:episodes-list="episodesList"/>
      <q-separator spaced inset />
      <character-details-dialog-characteres v-bind:character-list="especialCharacterList"/>
      <q-card-actions align="right">
        <q-btn class="btn-green" flat @click="share">
          <span class="text-btn-green">Compartir personaje</span>
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import CharacterDetailsDialogHeader from '@/components/dialog-details/CharacterDetailsDialogHeader.vue'
import CharacterDetailsDialogInfo from '@/components/dialog-details/CharacterDetailsDialogInfo.vue'
import CharacterDetailsDialogEpisodes from '@/components/dialog-details/CharacterDetailsDialogEpisodes.vue'
import CharacterDetailsDialogCharacteres from '@/components/dialog-details/CharacterDetailsDialogCharacteres.vue'

export default {
  name: 'CharacterDetailDialog',
  components: {
    CharacterDetailsDialogHeader,
    CharacterDetailsDialogInfo,
    CharacterDetailsDialogEpisodes,
    CharacterDetailsDialogCharacteres
  },
  props: {
    character: Object,
    episodesList: Array,
    especialCharacterList: Array
  },
  methods: {
    share () {
      this.$store.commit('dismiss')
    }
  }
}
</script>

<style scoped>
</style>
