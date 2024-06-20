
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

//引入pinia库
import { createPinia } from 'pinia'
//引入element-puls组件库
import ElementPlus from 'element-plus'
//引入vuestic组件库
import "vuestic-ui/css";

import { createVuestic } from "vuestic-ui";
//材质图标包
import { createIconsConfig } from "vuestic-ui";
import "vuestic-ui/css";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";


const app = createApp(App)

app.use(createPinia())
app.use(createVuestic());
app.use(ElementPlus)

app.use(router)

app.mount('#app')
