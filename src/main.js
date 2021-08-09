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
      list: [],
      gender: '',
      name: ''
    }
  },
  actions: {
    async loadList ({ commit, getters }) {
      let endpoint = '/character/?'
      try {
        if (getters.getGender !== '') {
          endpoint += 'gender=' + getters.getGender + '&'
        }
        if (getters.getName !== '') {
          endpoint += 'name=' + getters.getName + '&'
        }
        const { data } = await axios.get(app.config.globalProperties.API + endpoint)
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
    setGender (state, gender) {
      state.gender = gender
    },
    setVisible (state) {
      state.visible = true
    },
    setName (state, name) {
      state.name = name
    },
    dismiss (state) {
      state.visible = false
    }
  },
  getters: {
    getList (state) {
      return state.list
    },
    getGender (state) {
      return state.gender
    },
    getName (state) {
      return state.name
    }
  }
})

app.use(store)
app.mount('#app')
