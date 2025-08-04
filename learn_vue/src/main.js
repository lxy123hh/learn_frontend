import { createApp } from 'vue'
//import './style.css'
import './assets/index.css'
//import App from './App.vue'
import App from './components/UpLoad.vue'
//import App from './views/UserList.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  router from '@/router/index.js'
//createApp(App).use(ElementPlus).use(router).mount('#app')
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')