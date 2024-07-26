<template>
  <div>
    <el-input
      v-model="input"
      style="width: 240px; padding-top: 20px; padding-left: 20px"
      placeholder="Search"
    />
  </div>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="ID" width="70" />
      <el-table-column prop="name" label="Title" width="70" />
      <el-table-column prop="address" label="Source" width="150" />
      <el-table-column label="Author" width="100" />
      <el-table-column label="Status" width="120">
        <template #default="scope">
          <!--这里还没设置好，应该每一个按钮对应不同信息，这个后面再改改,md,还有一个bug是为什么只能点击一次wc-->
          <div v-show="changbutton1">
            <el-button
              @click="reserved1(scope.$index, scope.row)"
              type="warning"
              >Reserved</el-button
            >
          </div>
          <div v-show="!changbutton1">
            <el-button
              @click="available1(scope.$index, scope.row)"
              type="warning"
              >Available</el-button
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Edit" width="90" />
      <el-table-column label="Copy" width="90" />
      <el-table-column label="Attach" width="90" />
      <el-table-column label="Test" width="90" />
      <el-table-column label="Date" width="200" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const changbutton1 = ref(true);
const reserved1 = () => {
  changbutton1.value = !changbutton1.value;
  console.log("Reserved按钮被点击");
};
const available1 = () => {
  console.log("Available按钮被点击");
};
const tableData = [
  {
    date: "3",
    name: "Tom",
    address: " Los Angeles",
  },
  {
    date: "2",
    name: "Tom",
    address: "NLos Angeles",
  },
  {
    date: "4",
    name: "Tom",
    address: " Los Angeles",
  },
  {
    date: "1",
    name: "Tom",
    address: "NLos Angeles",
  },
];
</script>

<style>
</style>