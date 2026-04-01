

import { createApp } from 'vue'

import App from './App.vue'
import i18n from './i18n'
import './assets/main.css'
import router from "./router"

const app = createApp(App)

  app.use(router)
  app.use(i18n)
  app.mount('#app')
