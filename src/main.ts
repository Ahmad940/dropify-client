import AuthPlugin from '@/plugins/auth.plugin'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

// registering pinia plugin
app.use(createPinia())

// registering router plugin
app.use(router)

// authentication plugin
app.use(AuthPlugin)

app.mount('#app')
