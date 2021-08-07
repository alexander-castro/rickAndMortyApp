<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <CharacterList />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import CharacterList from './components/CharacterList.vue'

export default {
  name: 'LayoutDefault',
  components: {
    CharacterList
  },
  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
