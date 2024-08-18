<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    style="  background-color:rgb(20,55,95);"
  >
    <el-menu-item index="1" class="color" @click="goToCompetitionDetail">题目列表</el-menu-item>
    <el-menu-item index="2" class="color" @click="goToUesrCommit">提交</el-menu-item>
    <el-menu-item index="3" class="color" @click="goTodetail">评测列表</el-menu-item>
    <el-menu-item index="4" class="color" >榜单</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

import { ref } from 'vue'


const router = useRouter();

import { inject } from 'vue';

// 使用 inject 获取从父组件传递的 isShow 和 toggleShow
const isShow = inject('isShow');


/*这里需要获取一下当前正在进行的比赛的id，然后才能确定跳转到哪一个比赛的题目列表
这里只是随便定义的，后面还需要根据不同的id来展示不同的题目页面*/

const goToUesrCommit = () => {
  router.push({ name: "commit" });
  isShow.value=false;
  console.log("跳转到commit");
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


const goToCompetitionDetail = (id: string) => {
  isShow.value=false;
  // 使用router.push来导航到/detail路由，并传递查询参数
  router.push({
    name: "competition_detail",
    query: {
      id: id, // 这里传递的是detailId参数
    },
  });
  console.log("跳转到competition_detail");
};

const goTodetail = () => {
  router.push({ name: "detail" });
  isShow.value=false;
  console.log("跳转到detail");
};

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