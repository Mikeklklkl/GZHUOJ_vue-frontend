<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo;"
    mode="horizontal"
    @select="handleSelect"
    style="background-color:rgb(20,55,95);"
  >
    <el-sub-menu index="1" class="white-text">
      <template #title><span class="white-text">Article</span></template>
      <el-menu-item index="1-1" @click="goToArticleList" class="white-text;">Article List</el-menu-item>
      <el-menu-item index="1-2" @click="goToArticleAdd" class="white-text">Article Add</el-menu-item>
      <el-menu-item index="1-3" class="white-text">Carousel</el-menu-item>
      <el-menu-item index="1-4" class="white-text">About us</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2" class="white-text">
      <template #title><span class="white-text">Problem</span></template>
      <el-menu-item index="2-1" @click="goToProblemList" class="white-text">Problem List</el-menu-item>
      <el-menu-item index="2-2" @click="goToProblemAdd" class="white-text">Problem Add</el-menu-item>
      <el-menu-item index="2-3" class="white-text">Problem Rejudge</el-menu-item>
      <el-menu-item index="2-4" class="white-text">Problem Export</el-menu-item>
      <el-menu-item index="2-5" class="white-text">Problem Import</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3" class="white-text">
      <template #title><span class="white-text">User</span></template>
      <el-menu-item index="3-1" @click="goToUesrList" class="white-text">User List</el-menu-item>
      <el-menu-item index="3-2" @click="goToUserGenerator" class="white-text">User Generator</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4" class="white-text">
      <template #title><span class="white-text">contest</span></template>
      <el-menu-item index="4-1" @click="goToContestAdd" class="white-text">Contest Add </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToUesrList = () => {
  router.push({ name: "userlist" });
  console.log("跳转到userlist");
};
const goToArticleList = () => {
  router.push({ name: "articlelist" });
  console.log("跳转到articlelist");
};
const goToArticleAdd = () => {
  router.push({ name: "articleadd" });
  console.log("跳转到articleadd");
};
const goToUserGenerator = () => {
  router.push({ name: "usergenerator" });
  console.log("跳转到usergenerator");
};
const goToProblemAdd = () => {
  router.push({ name: "problemadd" });
  console.log("跳转到problemadd");
};
const goToProblemList = () => {
  router.push({ name: "problemlist" });
  console.log("跳转到problemlist");
};
const goToContestAdd = () => {
  router.push({ name: "contestadd" });
  console.log("跳转到contestadd");
};
</script>

<style >
.white-text {
  color: white;
}
/* 修改悬浮后菜单项的背景颜色 */
.el-menu-item:hover {
  background-color: rgb(30, 75, 130) !important;
}

/* 修改悬浮后子菜单标题的背景颜色 */
.el-sub-menu__title:hover {
  background-color: rgb(30, 75, 130) !important;
}

/* 修改悬浮后子菜单项的背景颜色 */
.el-menu-item-group__title:hover, 
.el-sub-menu__title:hover {
  color: white !important;
}

/* 修改子菜单展开后的背景颜色 */
.el-menu--popup .el-menu-item {
  background-color: rgb(20, 55, 95);
  color: white;
}

.el-menu--popup .el-menu-item:hover {
  background-color: rgb(30, 75, 130);
}

</style>