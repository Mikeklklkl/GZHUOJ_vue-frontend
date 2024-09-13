import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { createVuestic } from "vuestic-ui"
import 'vuestic-ui/css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建 SSR 入口
export const createApp = ViteSSG(
  App,
  { 
    routes: router.routes, // 使用你的路由配置
    history: createWebHistory(), // 使用 HTML5 history 模式
  },
  ({ app, router, isClient }) => {
    // 创建 Pinia 实例
    const pinia = createPinia()

    // 配置应用
    app.use(pinia)
    app.use(createVuestic())
    app.use(ElementPlus)

    // 注册 Element Plus 图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    // 客户端特定逻辑
    if (isClient) {
      console.log('Client-side rendering')
    }
  }
)
