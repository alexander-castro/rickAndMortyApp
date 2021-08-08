<template>
  <q-dialog v-model="isVisible">
    <q-card>
      <character-details-dialog-header v-bind:character="character"></character-details-dialog-header>
      <character-details-dialog-info v-bind:character="character"></character-details-dialog-info>
      <q-separator spaced inset />
      <q-card-section class="row justify-center">
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import CharacterDetailsDialogHeader from '@/components/dialog-details/CharacterDetailsDialogHeader.vue'
import CharacterDetailsDialogInfo from '@/components/dialog-details/CharacterDetailsDialogInfo.vue'

export default {
  name: 'CharacterDetailDialog',
  components: {
    CharacterDetailsDialogHeader,
    CharacterDetailsDialogInfo
  },
  props: {
    character: Object
  },
  computed: {
    isVisible () {
      return Object.keys(this.character).length > 0
    }
  }
}
</script>

<style scoped>

</style>
