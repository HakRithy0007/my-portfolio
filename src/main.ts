import './assets/style/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
