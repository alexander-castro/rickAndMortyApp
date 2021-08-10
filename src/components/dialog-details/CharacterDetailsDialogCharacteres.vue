<template>
  <q-card-section class="row justify-start">
    <div class="label">Personajes interesantes</div>
  </q-card-section>
  <q-card-section class="row justify-between q-gutter-xs">
    <div class="col-md-3" v-for="character in characterList" :key="character.id">
      <character-card v-bind="character" />
    </div>
  </q-card-section>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'

export default {
  name: 'CharacterDetailsDialogCharacteres',
  components: {
    CharacterCard
  },
  props: {
    characterList: Array
  }
}
</script>

<style scoped>
</style>
