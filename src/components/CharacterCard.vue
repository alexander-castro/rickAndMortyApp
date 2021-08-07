<template>
  <q-card class="my-card card-character" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pa-none image-character">
        <q-img class="col image-character" :src="image"/>
        <q-btn class="button-float" round size="sm">
          <q-icon class="disabled-color" name="start" size="xs" />
        </q-btn>
      </q-card-section>
      <q-card-section class="">
        <q-card-section class="q-pa-none q-pb-sm">
          <div class="label-status"><q-badge class="status-indicator q-pa-none"
          :class="[status==='Alive' ? 'green' : 'red']" rounded/>
           <span id="status">{{status}}</span>
           - <span id="type">{{species}}</span>
          </div>
          <div id="name" class="label-name">{{name}}</div>
        </q-card-section>
        <q-card-section class="q-pa-none q-pb-sm">
          <div id="locationLb" class="label">Last known location:</div>
          <div id="location" class="label-field">{{location.name}}</div>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <div id="lastSeenLb" class="label">First seen in:</div>
          <div id="lastSeen" class="label-field">{{origin.name}}</div>
        </q-card-section>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    id: Number,
    name: String,
    status: String,
    species: String,
    location: Object,
    origin: Object,
    image: String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.card-character {
  border: 1px solid #e0e0e0;
  box-sizing: content-box;
  border-radius: 10px;
  height: 140px;
  width: 326px;
}
.label {
  font-size: 10px;
  line-height: 12px;
  color: #828282;
}
.label-status {
  font-size: 10px;
  line-height: 12px;
  color: #828282;
}
.label-name {
  font-size: 16px;
  line-height: 20px;
}
.label-field {
  font-size: 12px;
  line-height: 15px;
}
.image-character {
  border-radius: 10px 0px 0px 10px;
  height: 140px;
  width: 140px;
}
.status-indicator {
  min-height: 6px !important;
  min-width: 6px !important;
  margin-right: 5px;
}
.status-indicator.red {
  background: #eb5757;
}
.status-indicator.green {
  background: #27ae60;
}
.button-float {
  background: #f2f2f2;
  transform: translate(-120%, 340%);
  position: absolute;
}
.button-float .disabled-color {
  color: #828282 !important;
}
.button-float .enabled-color {
  color: #f2994a !important;
}
</style>
