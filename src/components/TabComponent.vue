<template>
  <div class="q-pa-none row" style="width: 100%;">
    <search-component/>
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
import SearchComponent from '@/components/SearchComponent.vue'

export default {
  name: 'TabComponent',
  components: {
    CharacterList,
    SearchComponent
  },
  data () {
    return {
      tab: 'all'
    }
  }
}
</script>

<style scoped>
</style>
