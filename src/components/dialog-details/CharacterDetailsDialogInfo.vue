<template>
  <q-card-section class="row justify-start">
    <div class="label">Información</div>
  </q-card-section>
  <q-card-section class="row justify-between q-py-none">
    <character-details-dialog-card-details :item="{ icon: true, name: 'Gender:', value: character.gender }" />
    <character-details-dialog-card-details :item="{ icon: true, name: 'Origin:', value: character.origin.name }" />
    <character-details-dialog-card-details :item="{ icon: true, name: 'Type:', value: character.type }" />
  </q-card-section>
</template>

<script>
import CharacterDetailsDialogCardDetails from '@/components/dialog-details/CharacterDetailsDialogCardDetails.vue'

export default {
  name: 'CharacterDetailsDialogInfo',
  components: {
    CharacterDetailsDialogCardDetails
  },
  props: {
    character: Object
  }
}
</script>
