import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  // 确保引入了 Element Plus 的样式

// 引入 Vuestic 组件库
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

// 引入图标库
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 配置 Pinia
const pinia = createPinia()
app.use(pinia)

// 配置 ElementPlus
app.use(ElementPlus)

// 配置 Vuestic
app.use(createVuestic())

// 配置路由
app.use(router)

// 注册 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂载应用
app.mount('#app')
