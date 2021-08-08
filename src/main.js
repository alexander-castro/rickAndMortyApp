import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './assets/main.css'
import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      visible: false
    }
  },
  mutations: {
    setVisible (state) {
      state.visible = true
    },
    dismiss (state) {
      state.visible = false
    }
  }
})

const app = createApp(App)
app.config.globalProperties.API = process.env.VUE_APP_ROOT_API ? process.env.VUE_APP_ROOT_API : 'https://rickandmortyapi.com/api'
app.config.globalProperties.axios = axios
app.use(Quasar, quasarUserOptions)
app.use(store)
app.mount('#app')
