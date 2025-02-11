<template>
    <el-header class="top-header">
        <div class="header-container">
            <!-- 左侧：Logo -->
            <div class="logo-container">
                <img src="/icpc_logo.png" alt="Logo" class="logo" />
            </div>

            <!-- 中间：固定菜单栏 -->
            <div class="menu-container">
                <TopNavFour />
            </div>

            <!-- 右侧：用户信息 -->
            <div class="right-menu">
                <el-dropdown v-if="userInfo.token !== null && userInfo.token !== ''">
                    <span class="el-dropdown-link top-header-font">
                        用户中心 <el-icon>
                            <ArrowDown />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu class="custom-dropdown">
                            <el-dropdown-item class="top-header-menu-font">个人资料</el-dropdown-item>
                            <el-dropdown-item class="top-header-menu-font">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span v-else class="el-dropdown-link top-header-font" @click="goToLogin">
                    登录
                </span>
            </div>
        </div>
    </el-header>
</template>

<script setup>
import TopNavFour from "@/components/TopNavFour.vue"; // 直接在 `BaseHeader` 内部使用
import { userInfoStore } from "@/stores/userInfoStore";
import { ArrowDown } from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

const router = useRouter();
const userInfo = userInfoStore()

const goToLogin = () => {
  router.push({ name: "login" });
  console.log("跳转到login");
};

</script>

<style scoped>
/* 顶部导航栏 */
.top-header {
    width: 100%;
    height: 68px;
    background-color: #344e41;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

/* 顶栏容器 */
.header-container {
    width: 100%;
    display: flex;
    align-items: center;
}

/* 左侧 Logo（固定宽度 220px） */
.logo-container {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 67px;
    background-color: #344e41;
}

/* .logo {
    height: 40px;
  } */

/* 中间菜单栏（占 80%） */
.menu-container {
    flex-grow: 8;
    flex-basis: 80%;
    display: flex;
    justify-content: center;
}

/* 让 TopNavFour 适应 menu-container */
.menu-container>* {
    width: 100%;
}

/* 右侧用户菜单（占 20%） */
.right-menu {
    flex-grow: 2;
    flex-basis: 20%;
    min-width: 250px; /* 增加最小宽度，防止过小 */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #344e41;
    height: 67px;
    cursor: pointer;
    padding-right: 20px; /* 适当增加右侧间距，确保内容不会紧贴 */
}

/* 选中状态时字体变为黄色，取消默认下划线 */
:deep(.el-menu-item.is-active) {
  color: #f1c40f !important;
  background-color: transparent !important;
  border-bottom: none !important; /* 取消下划线 */
}


/* 悬停时字体变为黄色 */
.el-menu-item:hover {
  color: #f1c40f !important;
  background-color: transparent !important; /* 避免背景颜色变化 */
}

.custom-dropdown {
  background-color: #A3B18A !important;
  border: none !important;
}

.custom-dropdown .el-dropdown-item {
  color: white !important;
}

.custom-dropdown .el-dropdown-item:hover {
  background-color: #2E4E35 !important;
}

</style>