import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './mock/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App).use(ElementPlus).mount('#app')
