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
          <q-tab name="all" label="All" v-on:click="setGenderFilter('')"/>
          <q-tab name="unknown" label="Unknown" v-on:click="setGenderFilter('unknown')"/>
          <q-tab name="female" label="Female" v-on:click="setGenderFilter('female')"/>
          <q-tab name="male" label="Male" v-on:click="setGenderFilter('male')"/>
          <q-tab name="genderless" label="Genderless" v-on:click="setGenderFilter('genderless')"/>
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
    <FooterPage/>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import FooterPage from '@/components/FooterPage.vue'

export default {
  name: 'TabComponent',
  components: {
    CharacterList,
    SearchComponent,
    FooterPage
  },
  data () {
    return {
      tab: 'all'
    }
  },
  methods: {
    setGenderFilter (gender) {
      this.$store.commit('setGender', gender)
    }
  }
}
</script>

<style scoped>
</style>
