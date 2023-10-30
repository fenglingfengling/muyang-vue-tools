// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入Pinia状态持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@/styles/normalize.css'
// 导入 unocss 样式
import 'uno.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 创建 Pinia实例
const pinia = createPinia()
// 使用 Pinia 状态持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
