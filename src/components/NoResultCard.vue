<template>
  <div class="row justify-center">
    <div class="col">
      <h3 class="title">Uh-oh!</h3>
      <h5 class="sub-title">¡Pareces perdido en tu viaje!</h5>
      <q-btn class="btn-green">
        <span class="text-btn-green">Eliminar filtros</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoResultCard',
  props: {},
  data () {
    return {}
  }
}
</script>

<style scoped>
* {
  font-family: 'Lato', sans-serif !important;
  align-items: center;
  text-align: center;
}
.title {
  font-size: 36px;
  line-height: 43px;
  color: #353535;
  font-style: normal;
  font-weight: bold !important;
}
.sub-title {
  font-weight: 500 !important;
  font-size: 20px;
  line-height: 150%;
  color: #5e5e5e;
}

</style>
