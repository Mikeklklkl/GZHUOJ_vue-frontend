<template>
  <div style="padding: 20px">
    <el-text style="font-size: 30px; color: black; font-weight: bold">
      User Generator
    </el-text>
    <el-button type="primary" @click="changehelp"> help </el-button>
  </div>

  <div v-if="isShowHelp" class="p-30">
    <el-card style="max-width: 480px">
      <p>help内容</p>
    </el-card>
  </div>

  <div class="p-30">
    <p style="font-size: 17px; color: black">User Description:</p>
    <div style="padding: 10px">
      <el-input
        v-model="textarea"
        style="width: 80%"
        :rows="8"
        type="textarea"
        placeholder=" Description..."
      />
    </div>
    <div class="pt-3">
      <el-button type="primary"> Generate! </el-button>
    </div>
    <diV class="pt-4">
      <el-dropdown>
        <el-button type="primary">
          Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>MS-Excel</el-dropdown-item>
            <el-dropdown-item>CSV</el-dropdown-item>
            <el-dropdown-item>JSON</el-dropdown-item>
            <el-dropdown-item>PNG</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </diV>
  </div>

  <div class="pl-5">
    <el-table :data="tableData" stripe style="height: 240px">
      <el-table-column prop="idx" label="Idx" width="50" />
      <el-table-column prop="userid" label="User ID" width="150" />
      <el-table-column prop="username" label="User Name" width="100" />
      <el-table-column prop="school" label="School" width="100" />
      <el-table-column prop="email" label="Email" width="200" />
      <el-table-column prop="password" label="Password" width="150" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
//控制是否显示help内容
const isShowHelp = ref(false);
//多行文本框内容
const textarea = ref("");

const changehelp = () => {
  isShowHelp.value = !isShowHelp.value;
  console.log("help被点击");
};

const tableData = [
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },

  {
    idx: "1",
    userid: "32106100134",
    username: "tom",
    school: "gzhu",
    email: "123123123132@qq.com",
    password: "555555555",
  },
];
</script>

<style>
.p-30 {
  padding: 30px;
}
</style>