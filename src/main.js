import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from "./store"
import vSelect from 'vue-select'
import VueScrollTo from 'vue-scrollto'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueScrollTo)
app.component('v-select', vSelect)
app.mount('#app')
