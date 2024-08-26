<!--比赛界面。放各种比赛的跳转页面-->
<script  setup>
import { ref , onMounted} from "vue";
import { useRouter } from "vue-router";
import {getContestListService} from "@/api/contest.js";
import { inject } from 'vue';
// 路由
const router = useRouter();

// 视图控制, 侧边栏是否打开
const sideNavShowFlag = inject('isShow')

// 查询相关字段
const search = ref('')
const type = ref(0)
const order = ref({})

// 查询结果
const contests = ref([])

// 跳转特定比赛
const getContestDetail = (id) => {
  sideNavShowFlag.value = false;
  // 将侧边栏设置为关闭状态。
  // 使用router.push来导航到/detail路由，并传递A查询参数
  router.push({
    name: "contest-problem-set",
    params: {
      contestId: id, // 这里传递的是detailId参数
    },
  }).catch(err => {
    console.error(err);
  });;
  console.log("跳转到比赛题目集");
};

const getContestList = async()=> {
  const res = (await getContestListService({
    search: search.value, 
    type: type.value, 
  })).data;

  contests.value = res.data.records.map(record => ({
    id: record.contestId,
    title: record.title,
    startTime: record.startTime,
    endTime: record.endTime,
    status: record.contestStatus==1? "不开放": "开放"
  }))
  total.value = res.data.total;
  
}

// 分页组件中的逻辑
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)



onMounted(() =>{
  getContestList({
    search: search.value,
    goPage: currentPage.value,
    pageSize: pageSize.value
  })
})

</script>


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
    <el-table :data="contests" border stripe style="width: 100%">

      <el-table-column prop="id" label="ID" >
         <template v-slot="scope">  
          <div @dblclick="getContestDetail(scope.row.id)">{{ scope.row.id }}</div>  
        </template>  
      </el-table-column>
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="startTime" label="Start" />
      <el-table-column prop="endTime" label="End" />
      <el-table-column prop="status" label="Status" />
    </el-table>
  </div>
</div>


<el-pagination
    :visible = true
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 30, 40, 50, 60]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="getContestList"
    @current-change="getContestList"
    @prev-click	="getContestList"
    @next-click ="getContestList"
  />

<!-- <VaPagination
    v-model="value"
    class="mb-3"
    :visible-pages="7"
    :total="100"
    :direction-links="false"
    :page-size="pageSize"
    boundary-numbers
  />

  Items from {{ value }} to {{ value + pageSize - 1 }} -->
</template>



<style>
</style>