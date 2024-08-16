<template>
  <diV>
    <el-button-group>
      <el-button @click="goToCompetition">题目列表</el-button>
      <el-button @click="goTodetail">提交</el-button>
      <el-button @click="goToUesrCommit">评测列表</el-button>
      <el-button>榜单</el-button>
    </el-button-group>
  </diV>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToUesrCommit = () => {
  router.push({ name: "commit" });
  console.log("跳转到commit");
};
const goToCompetition = () => {
  router.push({ name: "competition" });
  console.log("跳转到competition");
};
const goTodetail = () => {
  router.push({ name: "detail" });
  console.log("跳转到detail");
};

</script>

<style scoped>
</style>