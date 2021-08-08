<template>
  <q-dialog v-model="$store.state.visible">
    <q-card style="max-width: 760px">
      <input type="hidden" ref="textToCopy" v-model="fullUrl" />
      <character-details-dialog-header v-bind:character="character" />
      <character-details-dialog-info v-bind:character="character" />
      <q-separator spaced inset />
      <characterDetailsDialogEpisodes v-bind:episodes-list="episodesList" />
      <q-separator spaced inset />
      <character-details-dialog-characteres v-bind:character-list="especialCharacterList" />
      <q-card-actions align="right">
        <q-btn class="btn-green" flat @click="share">
          <span class="text-btn-green">Compartir personaje</span>
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-dialog v-model="dialogConfirmCopy" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Enlace copiado :)</div>
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
  data () {
    return {
      fullUrl: '',
      dialogConfirmCopy: false
    }
  },
  methods: {
    share () {
      this.fullUrl = 'http://myweb/' + this.character.id
      navigator.clipboard.writeText(this.fullUrl)
      this.dialogConfirmCopy = true
    }
  }
}
</script>

<style scoped>
</style>
