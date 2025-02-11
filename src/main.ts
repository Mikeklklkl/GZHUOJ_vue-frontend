
import { createApp } from 'vue'

import router from './router'
import App from './App.vue'

//引入pinia库
import { createPinia } from 'pinia'
//引入element-puls组件库
import ElementPlus from 'element-plus'
//引入vuestic组件库
import "vuestic-ui/css";

import "./style/main.css";
import { createVuestic } from "vuestic-ui";
//材质图标包
import { createIconsConfig } from "vuestic-ui";
import "vuestic-ui/css";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(createVuestic());
app.use(ElementPlus)

app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
