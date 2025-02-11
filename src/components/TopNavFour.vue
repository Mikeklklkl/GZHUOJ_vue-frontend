<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    style="background-color: #344E41;"
  >
    <el-menu-item index="1" class="top-header-font color" @click="gotToContestProblem">题目</el-menu-item>
    <el-menu-item index="2" class="top-header-font color" @click="goToContestSubmit">提交</el-menu-item>
    <el-menu-item index="3" class="top-header-font color" @click="goToContestSubmissions">评测</el-menu-item>
    <el-menu-item index="4" class="top-header-font color" @click="goToContestRankBoard">榜单</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
import { ref, inject } from "vue";

const router = useRouter();
const route = useRoute();
const isShow = inject("isShow");

// 追踪当前选中的菜单项
const activeIndex = ref("1");

const handleSelect = (index: string) => {
  activeIndex.value = index; // 更新选中状态
};

const gotToContestProblem = () => {
  isShow.value = false;
  router.push({
    name: "contest-problem-set",
    params: {
      contestNum: route.params.contestNum,
    },
  });
};

const goToContestSubmit = () => {
  router.push({
    name: "submit",
    params: {
      contestNum: route.params.contestNum,
    },
  });
};

const goToContestRankBoard = () => {
  router.push({
    name: "rank-board",
    params: {
      contestNum: route.params.contestNum,
    },
  });
};

const goToContestSubmissions = () => {
  router.push({
    name: "contest-submission-detail",
    params: {
      contestNum: route.params.contestNum,
    },
  });
};
</script>

<style scoped>

/* 让菜单项的默认字体颜色为白色 */
.color {
  color: white !important;
  width: 100px;
  transition: color 0.3s ease;
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


/* 让菜单栏高度更协调 */
.el-menu-demo {
  height: 68px;
  line-height: 60px;
}

</style>
