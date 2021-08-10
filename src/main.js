import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './assets/main.css'
import axios from 'axios'
import { store } from './store/store'
import { createRouter, createWebHashHistory } from 'vue-router'
import TabComponent from '@/components/TabComponent.vue'
import DetailCharacterPage from '@/components/DetailCharacterPage.vue'

const app = createApp(App)
app.config.globalProperties.API = process.env.VUE_APP_ROOT_API ? process.env.VUE_APP_ROOT_API : 'https://rickandmortyapi.com/api'
app.config.globalProperties.axios = axios

const routes = [
  { path: '/', component: TabComponent },
  { path: '/character/:id', component: DetailCharacterPage, props: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
app.use(router)

app.use(Quasar, quasarUserOptions)

app.use(store)
app.mount('#app')
