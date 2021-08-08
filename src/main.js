import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './assets/main.css'
import axios from 'axios'
import { createStore } from 'vuex'

const app = createApp(App)
app.config.globalProperties.API = process.env.VUE_APP_ROOT_API ? process.env.VUE_APP_ROOT_API : 'https://rickandmortyapi.com/api'
app.config.globalProperties.axios = axios
app.use(Quasar, quasarUserOptions)

const store = createStore({
  state () {
    return {
      visible: false,
      page: 1,
      list: []
    }
  },
  actions: {
    async loadList ({ commit }) {
      const { data } = await axios.get(app.config.globalProperties.API + '/character/?page=' + 1)
      commit('setList', data.results)
    },
    async search ({ commit }, name) {
      console.log(name)
      try {
        const { data } = await axios.get(app.config.globalProperties.API + '/character/?name=' + name)
        commit('setList', data.results)
      } catch (error) {
        commit('setList', [])
      }
    }
  },
  mutations: {
    setList (state, list) {
      state.list = list
    },
    setPage (state, page) {
      state.page = page
    },
    setVisible (state) {
      state.visible = true
    },
    dismiss (state) {
      state.visible = false
    }
  },
  getters: {
    getList (state) {
      return state.list
    }
  }
})

app.use(store)
app.mount('#app')
