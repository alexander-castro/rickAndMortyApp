<template>
  <div class="row">
    <div class="col-md-10 offset-md-1">
      <div class="row vertical-middle">
        <h4 class="label">
          Mostrar favoritos:
          <q-btn class="button-float btn-fav" round size="sm">
            <q-icon class="disabled-color" name="start" size="xs" />
          </q-btn>
        </h4>
      </div>
      <div class="row">
        <div v-if="characterList.length > 0" class="row q-gutter-md justify-between">
          <div class="col-md-3" v-for="character in characterList" :key="character.id">
            <character-card v-bind="character" />
          </div>
          <div class="col-md-3"></div>
        </div>
        <no-result-card v-else class="row" />
      </div>
    </div>
  </div>
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
    this.characterList = data.results
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
