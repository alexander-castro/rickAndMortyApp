import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './assets/main.css'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.API = process.env.VUE_APP_ROOT_API
app.config.globalProperties.axios = axios
app.use(Quasar, quasarUserOptions)
app.mount('#app')
