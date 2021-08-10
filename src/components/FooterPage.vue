<template>
  <div class="column col-md-12 img-footer items-center justify-center"
    v-bind:style="{
      'background-image': 'url(' + require('@/assets/footer.png') + ')'
    }"
  >
    <img class="img-title row" src="@/assets/suazo.png" />
  </div>
</template>

<script>
export default {
  name: 'FooterPage'
}
</script>

<style scoped>
.img-footer {
  min-height: 145px;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.7);
}
</style>
