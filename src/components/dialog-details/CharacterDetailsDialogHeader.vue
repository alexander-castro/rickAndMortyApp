<template>
  <q-card-section class="row justify-end q-pa-none section-general">
    <img class="background-img" src="@/assets/background.jpg" />
    <q-btn class="close-btn" color="black" flat round dense v-close-popup>
      <q-icon class="close-icon" name="close" size="sm" />
    </q-btn>
  </q-card-section>
  <q-card-section class="row q-pa-none justify-center section-general" style="height: 70px">
    <q-avatar class="img" size="155px">
      <img :src="character.image" />
    </q-avatar>
    <q-btn class="btn-fav button-float" round size="sm">
      <q-icon class="disabled-color" name="start" size="xs" />
    </q-btn>
  </q-card-section>
  <q-card-section class="q-pa-none column items-center q-gutter-sm section-general" style="height: 100px">
    <div class="col-auto label-type">{{ character.status }}</div>
    <div class="col-auto label-name">{{ character.name }}</div>
    <div class="col-auto label-type">{{ character.species }}</div>
  </q-card-section>
</template>

<script>
export default {
  name: 'CharacterDetailsDialogHeader',
  props: {
    character: Object
  }
}
</script>

<style scoped>
.section-general {
  background: #f2f2f2;
}
.background-img {
  background: rgba(0, 0, 0, 0.4);
  width: 740px;
  height: 220px;
  object-fit: cover;
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
