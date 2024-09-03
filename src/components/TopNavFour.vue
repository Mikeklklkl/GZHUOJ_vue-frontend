<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    style="  background-color:rgb(20,55,95);"
  >
    <el-menu-item index="1" class="color" @click="gotToContestProblem">题目</el-menu-item>
    <el-menu-item index="2" class="color" @click="goToContestSubmit">提交</el-menu-item>
    <el-menu-item index="3" class="color" @click="goToContestSubmissions">评测 </el-menu-item>
    <el-menu-item index="4" class="color" @click="goToContestRanklist">榜单</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRouter,useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();

import { inject } from 'vue';

// 使用 inject 获取从父组件传递的 isShow 和 toggleShow
const isShow = inject('isShow');



const gotToContestProblem = () => {
  isShow.value=false;
  // 使用router.push来导航到/detail路由，并传递查询参数
  router.push({
    name: "contest-problem-set",
    params: {
      contestId: route.params.contestId, // 这里传递的是detailId参数
    },
  });
  console.log("跳转到competition_detail");
};

const goToContestSubmit = () => {
  router.push({ 
    name: "submit",
    params: {
      contestId: route.params.contestId
    }
  });

};

const goToContestRanklist = () =>{
  router.push({
    name: "ranklist",
    params: {
      contestId: route.params.contestId
    }
  })
};

const goToContestSubmissions = () =>{
  router.push({
    name: "contest-submission-detail",
    params: {
      contestId: route.params.contestId
    }
  })
};

const tableData = [
  {
    id: "0001",
    title: "广东省第十九届大学生计算机程序设计竞赛",
    status:"Ended",
    start: "2024-09-30 20:00:00",
    end:"2024-10-10 20:00:00",
    type:"public",
    router:"001"
  }
];

</script>

<style scoped>

/* 修改悬浮后菜单项的背景颜色 */
.el-menu-item:hover {
  background-color: rgb(30, 75, 130) !important;
}

.color{

  color:white;
  width:100px;
}

::v-deep .el-menu-item.is-active {
  background-color: rgb(0, 66, 164) !important;
  color: white !important;
}


</style>