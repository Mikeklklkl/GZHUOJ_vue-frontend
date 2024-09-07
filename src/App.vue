<template >
  <div class="common-layout">
    <el-container style="height: 100vh">
      <!--侧边栏-->
      <!--如果想实现必须登录才能够看到侧边栏的话，我有一个想法默认isShow为false，然后定义一个变量，来限制收缩栏的按钮，登录就能看到，这样子应该可以-->
      <el-aside
        width="200px"
        v-show="isShow"
        style="background-color: rgb(250, 250, 250); overflow: hidden"
      >
        <SideNav @click="toggleShow" />
      </el-aside>

      <!--主要内容-->
      <el-container style="background-color: rgb(255, 255, 255)">
        <el-main style="padding: 0">
          <el-button class="floating-button" @click="toggleShow" size="large">
            <div v-if="isShow">
              <el-icon style="font-size: 24px;"><Expand /></el-icon>
            </div>
            <div v-else>
              <el-icon style="font-size: 24px;"><Fold /></el-icon>
            </div>
          </el-button>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import SideNav from "./components/SideNav.vue";
import { ref, provide } from "vue";

//判断是否展示侧边栏
const isShow = ref(true);
const toggleShow = () => {
  isShow.value = !isShow.value;
  console.log(isShow.value);
};

// 使用 provide 将 isShow 和 toggleShow 提供给子组件
provide("isShow", isShow);
provide("toggleShow", toggleShow);
</script>

<style scoped>
/*@import url(./style/debug.css);*/
.floating-button {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 1000; /* 确保按钮在前面 */
}
.floating-button {
  background-color: transparent !important; /* 背景色透明 */
  border: none !important; /* 去掉边框 */
  box-shadow: none !important; /* 去掉阴影 */
}

.floating-button:hover {
  background-color: rgba(
    0,
    0,
    0,
    0.1
  ) !important; /* 添加悬停效果，可以根据需要调整 */
}
</style>
