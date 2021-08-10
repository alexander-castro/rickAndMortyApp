<template>
  <div class="q-pa-none">
    <q-layout view="hHh lpR fFf" style="min-height: 1400px">
      <q-page-container>
        <search-component />
        <div class="col col-md-12">
          <q-card style="box-shadow:none">
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
              <q-tab name="all" label="All" v-on:click="setGenderFilter('')" />
              <q-tab name="unknown" label="Unknown" v-on:click="setGenderFilter('unknown')" />
              <q-tab name="female" label="Female" v-on:click="setGenderFilter('female')" />
              <q-tab name="male" label="Male" v-on:click="setGenderFilter('male')" />
              <q-tab name="genderless" label="Genderless" v-on:click="setGenderFilter('genderless')" />
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
      </q-page-container>
      <q-footer elevated>
        <FooterPage />
      </q-footer>
    </q-layout>
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
