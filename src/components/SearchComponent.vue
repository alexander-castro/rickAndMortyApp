<template>
  <div
    class="column col-md-12 img-background items-center justify-center"
    v-bind:style="{
      'background-image':
        'url(https://www.earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/rick-morty-season-5.jpg)'
    }"
  >
    <div class="search-bar row col-2 items-center">
      <q-icon name="search" size="lg" color="white" />
      <input v-model="searchText" class="search-text" placeholder="Buscar personaje..." v-on:input="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search () {
      if (this.searchText.length === 0) {
        this.$store.dispatch('loadList')
        return
      }
      if (this.searchText.length > 3) {
        this.$store.commit('setName', this.searchText)
        this.$store.dispatch('loadList')
      }
    }
  }
}
</script>

<style scoped>
.img-background {
  min-height: 450px;
  background-size: cover;
}
.search-bar {
  width: 500px;
  max-height: 60px;
  background: #081f32;
  border: 2px solid #f2f2f2;
  box-sizing: border-box;
}
.search-text {
  width: 450px;
  max-height: 60px;
  background: #081f32;
  border: none !important;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}
input:focus {
  outline: none;
}
</style>
