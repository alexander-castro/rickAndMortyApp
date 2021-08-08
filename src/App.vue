<template>
  <TabComponent />
</template>

<script>
import { ref } from 'vue'
import TabComponent from '@/components/TabComponent.vue'

export default {
  name: 'LayoutDefault',
  components: {
    TabComponent
  },
  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
