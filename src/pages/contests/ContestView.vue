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
const contests = ref([])



const getContestList = async()=> {
  const res = (await getContestListService({
    search: search.value, 
    type: type.value, 
  })).data;

  contests.value = res.data.records.map(record => ({
    contestNum: record.contestNum,
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
<div class="card-container">
    <ContestCard v-for="contest in contests" :key="contest.id" :contest="contest" />
  </div>
</template>



<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px; /* 控制卡片之间的间距 */
}
</style>