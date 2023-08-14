import 'maz-ui/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(AOS.init()).mount('#app')
