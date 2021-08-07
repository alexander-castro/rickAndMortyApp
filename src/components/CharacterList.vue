<template>
  <div>
    <div v-for="character in characterDataList" :key="character.id">
      <character-card v-bind="character" />
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'

export default {
  name: 'CharacterList',
  components: {
    CharacterCard
  },
  props: {},
  data () {
    return {
      characterDataList: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/1'
          },
          location: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/20'
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
