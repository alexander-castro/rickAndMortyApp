<template>
  <q-card-section class="row justify-end q-pa-none background-img" v-bind:style="{
      'background-image': 'url(' + require('@/assets/bg.png') + ')'
    }">
    <q-btn class="close-btn" color="black" flat round dense @click="dismiss" v-if="dialog">
      <q-icon class="close-icon" name="close" size="sm" />
    </q-btn>
  </q-card-section>
  <q-card-section class="row q-pa-none justify-center section-general" style="height: 70px">
    <q-avatar class="img" size="155px">
      <img :src="character.image" />
    </q-avatar>
    <q-btn class="btn-fav button-float" round size="sm" @click="changeFavorite">
      <q-icon :class="[ isFavorite ? 'favorite' : 'disabled-color' ]" name="start" size="xs" />
    </q-btn>
  </q-card-section>
  <q-card-section class="q-pa-none column items-center section-general" style="height: 100px">
    <div class="col-auto label-type">{{ character.status }}</div>
    <div class="col-auto label-name">{{ character.name }}</div>
    <div class="col-auto label-type">{{ character.species }}</div>
  </q-card-section>
</template>

<script>
export default {
  name: 'CharacterDetailsDialogHeader',
  props: {
    character: Object,
    dialog: Boolean
  },
  methods: {
    dismiss () {
      this.$store.commit('dismiss')
    },
    changeFavorite () {
      this.$store.commit('changeFavorite', this.character.id)
    }
  },
  computed: {
    isFavorite () {
      return this.$store.getters.isFavorite(this.character.id)
    }
  }
}
</script>

<style scoped>
.section-general {
  background: #f2f2f2;
}
.background-img {
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
  width: 100%;
  min-height: 220px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
}
.close-btn {
  transform: translate(0%, -650%);
  background-color: white;
}
.close-icon {
  font-weight: bolder !important;
}
.img {
  transform: translate(0%, -75%);
  border: 4px solid #fffbfb;
  box-sizing: content-box;
  border-radius: 155px;
}
.btn-fav {
  transform: translate(0%, 70%);
  background: #f2f2f2;
  border: 3px solid #ffffff;
  box-sizing: content-box;
}
.label-name {
  font-weight: 600 !important;
  font-size: 20px;
  line-height: 24px;
  color: #081f32;
}
.label-type {
  font-weight: 500 !important;
  font-size: 12px;
  line-height: 15px;
  color: #4f4f4f;
  text-transform: uppercase;
}
</style>
