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
      <el-table-column prop="id" label="ID" />
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

<style>
</style>