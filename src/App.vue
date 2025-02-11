<template>
  <div class="common-layout">
    <el-container class="app-container">
      <!-- 顶栏 -->
      <el-header class="top-header">
        <BaseHeader />
      </el-header>

      <!-- 侧边栏 + 主要内容 -->
      <el-container class="content-container">
        <!-- 侧边栏 -->
        <el-aside v-if="isShow" class="sidebar">
          <SideNav @click="toggleShow" />
        </el-aside>

        <!-- 主要内容 -->
        <el-main class="main-content" :class="{ 'is-centered': !isShow }">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>

    <!-- 浮动按钮：抽离到最外层 -->
    <el-button class="floating-button" @click="toggleShow" size="large">
      <el-icon style="font-size: 24px;">
        <component :is="isShow ? 'Expand' : 'Fold'" />
      </el-icon>
    </el-button>
  </div>
</template>


<script setup>
import SideNav from "./components/SideNav.vue";
import BaseHeader from "./components/BaseHeader.vue";
import { ref, provide } from "vue";

// 判断是否展示侧边栏
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
/* 确保整个应用全屏 */
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 顶部导航栏 */
.top-header {
  padding: 0 !important;
  margin: 0 !important;
  width: 100%;
  height: 68px;
  background-color: rgb(250, 250, 250);
  border-bottom: 1px solid rgb(230, 230, 230);
}

/* 侧边栏变成悬浮式卡片 */
.sidebar {
  position: fixed;
  top: 80px;
  /* 顶部留出间距 */
  left: 20px;
  /* 左侧留出间距 */
  bottom: 300px;
  /* 底部留出间距 */
  width: 220px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* 仅在内容区域应用网格背景 */
.content-container {
  flex: 1;
  width: 100%;
  position: relative;

  /* 网格背景 */
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  /* 调整网格密度 */
  background-position: center;
}

/* 主要内容区域 */
.main-content {
  position: fixed;
  /* 让内容区浮动 */
  top: 80px;
  /* 距离顶部 80px */
  left: 260px;
  /* 侧边栏展开时，内容靠左 */
  right: 20px;
  /* 右侧留空 */
  bottom: 20px;
  /* 底部留空 */
  background-color: white;
  /* 让内容区保持白色 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  /* 添加阴影使其浮动 */
  border-radius: 12px;
  /* 让边角更柔和 */
  padding: 20px;
  overflow-y: auto;
  transition: all 0.3s ease;
  /* 平滑过渡 */
}

/* 主要内容 - 侧边栏关闭时居中 */
.is-centered {
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
  /* 让内容变得更宽 */
  max-width: 1800px;
  /* 增加最大宽度，减少大屏幕上的空白 */
}

/* 浮动按钮 - 始终固定在左下角 */
.floating-button {
  position: fixed;
  left: 40px;
  /* 调整到适当位置 */
  bottom: 40px;
  /* 让它保持一定距离 */
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  box-shadow: none;
  transition: all 0.3s ease;
}

/* 按钮鼠标悬停效果 */
.floating-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}


.floating-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
