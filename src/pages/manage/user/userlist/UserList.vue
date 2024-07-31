<template>
  <div>
    <el-input
      v-model="search"
      style="width: 240px; padding-top: 20px; padding-left: 20px"
      placeholder="Search"
    />
  </div>
  <div style="padding-left:20px;padding-top:10px;">
    <el-table :data="data" style="width: 100%" height="528">
      <el-table-column type="selection" width="55" />
      <el-table-column fixed prop="id" label="id" width="100" />
      <el-table-column prop="userAccount" label="Account" width="120" />
      <el-table-column prop="userName" label="Nick" width="120" />
      <el-table-column prop="organization" label="organization" width="120" />
      <el-table-column prop="email" label="Email" width="120" />
      <el-table-column prop="createTime" label="createTime" width="150" />
      <el-table-column label="Edit" width="100">
        <template #default="scope">
          <el-button @click="edit(scope.$index, scope.row)" type="primary"
            >编辑</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="Del" width="100">
        <template #default="scope">
          <el-button @doubleClick="del(scope.$index, scope.row)" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-pagination
    :visable = true
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 30, 40, 50, 60]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="searchSubmit"
    @current-change="searchSubmit"
    @prev-click	="searchSubmit"
    @next-click ="searchSubmit"
  />
</template>


<script setup>
import { ElMessage } from "element-plus";
import {userManagerListService} from '@/api/userManager.js'
import { ref } from 'vue'

const search = ref('')
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// todo 当进入这个页面, 就发送函数的方法
const data = ref([
  {idx: 0, userAccount: 1, userName: ' ', organization: 10, email: 1, createTime: "2024-07-12 16:15:51"}
])


const searchSubmit = async () =>{
  // console.log("come here!!!")
  const req = {
    search: search.value,
    currentPage: currentPage.value,
    pageSize: pageSize.value,
  };
  // console.log(req)
  const res = await userManagerListService({
    search: search.value,
    currentPage: currentPage.value,
    pageSize: pageSize.value,
  })
  // console.log(res);
  // TODO 对对象进行映射处理
  // 进行映射处理，对参数进行一一对应:

  data.value = res.data.data.records.map(record => ({
    id: record.idx ,
    userAccount: record.userAccount,
    userName: record.username,
    organization: record.organization,
    email: record.email,
    createTime: record.createTime
  }))
  total.value = res.data.total
  total.value = res.data.data.total
  ElMessage("开始查询")
}

const edit = () => {
  // console.log("编辑按钮被点击");
  ElMessage("编辑按钮被点击");
};
const del = () => {
  ElMessage("删除按钮被点击");
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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