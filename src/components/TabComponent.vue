<template>
  <div class="q-pa-md row" style="width: 100%">
    <div
      class="column col-md-12 img-background items-center justify-center"
      v-bind:style="{
        'background-image':
          'url(https://www.earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/rick-morty-season-5.jpg)'
      }"
    >
      <div class="search-bar row col-2 items-center">
        <q-icon name="search" size="lg" color="white"/>
        <input v-model="text" class="search-text"/>
      </div>
    </div>
    <div class="col col-md-12">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="dark"
          indicator-color="positive"
          align="justify"
          narrow-indicator
          style="height: 80px"
        >
          <q-tab name="all" label="All" />
          <q-tab name="unknown" label="Unknown" />
          <q-tab name="female" label="Female" />
          <q-tab name="male" label="Male" />
          <q-tab name="genderless" label="Genderless" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="all">
            <CharacterList />
          </q-tab-panel>
          <q-tab-panel name="unknown">
            <CharacterList />
          </q-tab-panel>
          <q-tab-panel name="female">
            <CharacterList />
          </q-tab-panel>
          <q-tab-panel name="male">
            <CharacterList />
          </q-tab-panel>
          <q-tab-panel name="genderless">
            <CharacterList />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue'

export default {
  name: 'TabComponent',
  components: {
    CharacterList
  },
  props: {},
  data () {
    return {
      tab: 'all',
      text: 'Buscar personaje...'
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
  height: 60px;
  background: #081f32;
  border: none !important;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}
input:focus{
  outline: none;
}
</style>
