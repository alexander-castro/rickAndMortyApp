<template>
  <q-card class="my-card card-character" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pa-none image-character">
        <q-img class="col image-character" :src="character.image" />
        <q-btn class="btn-fav button-float" round size="sm" @click="changeFavorite">
          <q-icon :class="[ isFavorite ? 'favorite' : 'disabled-color' ]" name="start" size="xs" />
        </q-btn>
      </q-card-section>
      <q-card-section class="cursor-pointer" @click="$emit('showDetailsModal', character.id)">
            <q-card-section class="q-pa-none q-pb-sm">
              <div class="label-status">
                <q-badge class="status-indicator q-pa-none" :class="[character.status === 'Alive' ? 'green' : 'red']" rounded />
                <span id="status">{{ character.status }}</span>
                - <span id="type">{{ character.species }}</span>
              </div>
              <div id="name" class="label-name">{{ character.name }}</div>
            </q-card-section>
            <q-card-section class="q-pa-none q-pb-sm">
              <div id="locationLb" class="label">Last known location:</div>
              <div id="location" class="label-field">{{ character.location.name }}</div>
            </q-card-section>
            <q-card-section class="q-pa-none">
              <div id="lastSeenLb" class="label">First seen in:</div>
              <div id="lastSeen" class="label-field">{{ character.origin.name }}</div>
            </q-card-section>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    character: Object
  },
  data () {
    return {}
  },
  methods: {
    changeFavorite () {
      this.$store.commit('changeFavorite', this.character.id)
    }
  },
  computed: {
    isFavorite () {
      return this.$store.getters.isFavorite(this.character.id)
    }
  },
  emits: ['showDetailsModal']
}
</script>

<style scoped>
.card-character {
  border: 1px solid #e0e0e0;
  box-sizing: content-box;
  border-radius: 10px;
  height: 155px;
  width: 326px;
  max-width: 326px;
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
  height: 155px;
  width: 155px;
}
.status-indicator {
  min-height: 6px !important;
  min-width: 6px !important;
  margin-right: 5px;
}
.btn-fav {
  transform: translate(-120%, 400%);
}
.status-indicator.red {
  background: #eb5757;
}
.status-indicator.green {
  background: #27ae60;
}
</style>
