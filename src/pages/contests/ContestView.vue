<!--比赛界面。放各种比赛的跳转页面-->
<script  setup>
import { ref , onMounted} from "vue";
import { useRouter } from "vue-router";
import {getContestListService} from "@/api/contest.js";
import { inject } from 'vue';
import ContestCard from "../contests/components/Card.vue";
// 路由
const router = useRouter();

// 视图控制, 侧边栏是否打开
const sideNavShowFlag = inject('isShow')

// 查询相关字段
const search = ref('')
const type = ref(0)
const order = ref({})

// 查询结果
const contests1 = ref([])

// 跳转特定比赛
const getContestDetail = (id) => {
  sideNavShowFlag.value = false;
  // 将侧边栏设置为关闭状态。
  // 使用router.push来导航到/detail路由，并传递A查询参数
  router.push({
    name: "contest-problem-set",
    params: {
      contestNum: id, // 这里传递的是detailId参数
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
    id: record.contestNum,
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

const contests = [
  { id: 1, imageUrl: 'url1', startTime: '2024-09-01', endTime: '2024-09-05' },
  { id: 2, imageUrl: 'url2', startTime: '2024-09-02', endTime: '2024-09-06' },
  { id: 2, imageUrl: 'url2', startTime: '2024-09-02', endTime: '2024-09-06' },
  { id: 2, imageUrl: 'url2', startTime: '2024-09-02', endTime: '2024-09-06' },
  { id: 2, imageUrl: 'url2', startTime: '2024-09-02', endTime: '2024-09-06' },
  { id: 2, imageUrl: 'url2', startTime: '2024-09-02', endTime: '2024-09-06' },
  { id: 2, imageUrl: 'url2', startTime: '2024-09-02', endTime: '2024-09-06' },
  // 其他比赛数据...
];

</script>


<template>
<div class="card-container">
    <ContestCard v-for="contest in contests" :key="contest.id" :contest="contest" />
  </div>
</template>



<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 控制卡片之间的间距 */
}
</style>