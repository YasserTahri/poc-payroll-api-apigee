import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//createApp(App).mount('#appMain')
createApp(App).use(router).mount('#appMain')
import 'bootstrap/dist/js/bootstrap.js'

