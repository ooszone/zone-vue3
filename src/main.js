import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import  './module/module'
import install from './install'
import ElementUI from 'element-plus'

createApp(App).use(store).use(router).use(install).use(ElementUI).mount('#app')
