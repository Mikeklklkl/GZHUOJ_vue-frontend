# GZHUOJ-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

//启动typescript
TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm install vite --save-dev //先行命令
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### 项目依赖包下载
```sh
npm install vue-router@next
npm install @vitejs/plugin-vue --save-dev
npm install -D unplugin-vue-components unplugin-auto-import
npm install element-plus --save
npm install material-design-icons-iconfont -D
npm install vuestic-ui//不一定用得上
npm install --save-dev @types/node
npm i @types/node -D
``` 

### 浏览器建议
在edge上可以找到vue.js devtools 可以把项目结构看的清晰一点
