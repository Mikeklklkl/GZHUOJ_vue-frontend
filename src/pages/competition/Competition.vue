<!--比赛界面。放各种比赛的跳转页面-->
<template>
<div style="background-color:rgb(255,255,255)">
  





  <div style="height: 8%;padding:20px">

      <el-input
        v-model="input"
        style="width: 240px"
        placeholder="请输入ID"
        clearable
      />

  </div>

  <div style="padding:20px">
    <el-table :data="tableData" border stripe style="width: 100%">

      <el-table-column prop="id" label="ID" >
         <template v-slot="scope">  
          <div @dblclick="goToCompetitionDetail(scope.row.id)">{{ scope.row.id }}</div>  
        </template>  
      </el-table-column>
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="status" label="Status" />
      <el-table-column prop="start" label="Start" />
      <el-table-column prop="end" label="End" />
      <el-table-column prop="type" label="Type"/>
    </el-table>
  </div>
</div>
</template>

<script lang="ts" setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import TopNavFour from "../../components/TopNavFour.vue";

const router = useRouter();

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
  // 使用router.push来导航到/detail路由，并传递查询参数
  router.push({
    name: "competition_detail",
    query: {
      id: id, // 这里传递的是detailId参数
    },
  });
  console.log("跳转到competition_detail");
};
</script>

<style>
</style>