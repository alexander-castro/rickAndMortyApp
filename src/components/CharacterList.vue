<template>
  <div class="row q-gutter-xs justify-center">
    <div class="col-3" v-for="character in characterList" :key="character.id">
      <character-card v-bind="character" />
    </div>
  </div>
  <no-result-card></no-result-card>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import NoResultCard from '@/components/NoResultCard.vue'

export default {
  name: 'CharacterList',
  components: {
    CharacterCard,
    NoResultCard
  },
  props: {},
  data () {
    return {
      characterList: []
    }
  },
  async mounted () {
    const { data } = await this.axios.get(this.API + '/character/' + '?page=1')
    console.log(data)
    this.characterList = data.results
  }
}
</script>

<style scoped>
</style>
