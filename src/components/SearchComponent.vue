<template>
  <div
    class="column col-md-12 img-background items-center justify-center"
    v-bind:style="{
      'background-image':
        'url(https://www.earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/rick-morty-season-5.jpg)'
    }"
  >
    <img class="img-title row" src="@/assets/rickAndMorty.png" />
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
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
}
.img-title {
  min-height: 125px;
  min-width: 350px;
  max-height: 125px;
  max-width: 350px;
}
.search-bar {
  width: 500px;
  max-height: 60px;
  background: #081f32;
  border: 2px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 6px;
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
::-webkit-input-placeholder { /* Edge */
  color: #ffffff;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #ffffff;
}
::placeholder {
  color: #ffffff;
}
</style>
