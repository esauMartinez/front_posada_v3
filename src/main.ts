import './assets/main.css'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'
import { Button, Card, Column, DataTable, IconField, InputIcon, InputText, Tag } from 'primevue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'white',
    },
  },
})

app.component('V-DataTable', DataTable)
app.component('V-Column', Column)
app.component('V-Card', Card)
app.component('V-IconField', IconField)
app.component('V-InputIcon', InputIcon)
app.component('V-InputText', InputText)
app.component('V-Button', Button)
app.component('V-Tag', Tag)

app.mount('#app')
