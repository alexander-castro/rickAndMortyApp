<template>
  <q-card class="my-detail-card my-card q-pa-none" style="height: 90px; width:165px">
    <q-card-section class="column items-start q-gutter-xs" style="">
      <div class="col name"><q-icon name="info" v-if="item.icon" />{{ item.name }}</div>
      <div class="col info"><span v-if="item.value">{{ item.value }}</span><span v-else>Unknown</span></div>
      <div class="col details" v-if="item.details">{{ item.details }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CharacterDetailsDialogCardDetails',
  props: {
    item: Object
  }
}
</script>

<style scoped>
.my-detail-card {
  border: 1px solid #BDBDBD;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: none !important;
}
.name {
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: #828282;
}
.info {
  font-weight: 600 !important;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #081f32;
}
.details {
  font-weight: 500 !important;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: #828282;
  text-transform: uppercase;
}
</style>
