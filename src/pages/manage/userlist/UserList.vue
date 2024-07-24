<template>
  <div>
    <el-input
      v-model="input"
      style="width: 240px; padding-top: 20px; padding-left: 20px"
      placeholder="Search"
    />
  </div>
  <div style="padding-left:20px;padding-top:10px;">
    <el-table :data="tableData" style="width: 100%" height="528">
      <el-table-column fixed prop="id" label="id" width="100" />
      <el-table-column prop="account" label="Account" width="120" />
      <el-table-column prop="name" label="Nick" width="120" />
      <el-table-column prop="school" label="School" width="120" />
      <el-table-column prop="email" label="Email" width="120" />
      <el-table-column prop="Submit" label="Submit" width="80" />
      <el-table-column prop="solved" label="Solved" width="80" />
      <el-table-column prop="regtime" label="Reg Time" width="150" />
      <el-table-column label="Edit" width="100">
        <template #default="scope">
          <el-button @click="edit(scope.$index, scope.row)" type="primary"
            >编辑</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="Del" width="100">
        <template #default="scope">
          <el-button @click="del(scope.$index, scope.row)" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script lang="ts" setup>
const edit = () => {
  console.log("编辑按钮被点击");
};
const del = () => {
  console.log("删除按钮被点击");
};
const tableData = [
  {
    id: "0001",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "1",
    regtime: "2024-07-12 16:15:51",
  },
  {
    id: "0002",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
  {
    id: "0003",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
  {
    id: "0004",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
  {
    id: "0005",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
  {
    id: "0006",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
  {
    id: "0007",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
  {
    id: "0008",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
  {
    id: "0009",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
  {
    id: "0010",
    account: "Tom",
    school: "California",
    email: "Los Angeles",
    Submit: "1",
    solved: "0",
  },
];
</script>

<style>
</style>