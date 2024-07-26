<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-sub-menu index="1">
      <template #title>Article</template>
      <el-menu-item index="1-1" @click="goToArticleList">Article List</el-menu-item>
      <el-menu-item index="1-2">Article Add</el-menu-item>
      <el-menu-item index="1-3">Carousel</el-menu-item>
      <el-menu-item index="1-4">About us</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>Problem</template>
      <el-menu-item index="2-1" @click="goToProblemList">Problem List</el-menu-item>
      <el-menu-item index="2-2" @click="goToProblemAdd">Problem Add</el-menu-item>
      <el-menu-item index="2-3">Problem Rejudge</el-menu-item>
      <el-menu-item index="2-4">Problem Export</el-menu-item>
      <el-menu-item index="2-5">Problem Import</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>User</template>
      <el-menu-item index="3-1" @click="goToUesrList">User List</el-menu-item>
      <el-menu-item index="3-2" @click="goToUserGenerator">User Generator</el-menu-item>
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
  console.log("跳转到problem;ist");
};
</script>

<style>
</style>