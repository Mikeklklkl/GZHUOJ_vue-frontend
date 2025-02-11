<!--题目集页面-->
<template>
  <div style="padding: 20px">
    <el-table
      border
      stripe
      :data="problems"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="problemLetterInContest" label="ID" width="100">
        <template v-slot="scope">
          <div @click="goToProblemDetail(scope.row.problemLetterInContest)">
            {{ scope.row.problemLetterInContest}}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="Title" width="500" />
      <el-table-column prop="limit" label="Limit" width="200">
        <template v-slot="scope">
          <div>
            {{scope.row.memoryLimit + "MB" + "/" + scope.row.timeLimit + "S"}}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="accepted" label="Calculate" />
    </el-table>
  </div>
</template>


<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import {ref, onMounted} from 'vue'
import {numberToLetter} from '@/utils/transferUtils.js'
import {getContestProblemsService} from '@/api/contest.js'
// import type Problem from "./Problem.vue";
const router = useRouter();
const route = useRoute();

onMounted(() => {
  // 加载页面时，获取题目集
  getContestProblemsList()
})

// console.log('Current contestNum:', contestNum);

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (row.commit === "1") {
    return "success-row";
  } else if (row.commit === "2") {
    return "warning-row";
  }
  // 如果commit不是1也不是2，或者未定义，则不返回特殊类名
  return "";
};

const problems = ref([
  {
    problemNumStr: "A",
    title: "Cool, It's Yesterday Four Times More",
    calculate: "500",
    id: "100"
  }
]
)

const goToProblemDetail = (id: number) => {
  // 使用router.push来导航到/detail路由，并传递查询参数
  router.push({
    name: "contest-problem",
    params: {
      contestNum: route.params.contestNum,
      problemLetterInContest: id, // 这里传递的是detailId参数
    },
  });
  console.log("跳转到commit_submit");
};

const getContestProblemsList = async () =>{
  const res = (await getContestProblemsService({contestNum: route.params.contestNum})).data;
  problems.value = res.data.map((record: ProblemRecord) =>({
    problemNum: record.problemNum,
    problemNumInContest: record.problemLetterIndex,
    problemLetterInContest: numberToLetter(record.problemLetterIndex),
    title: record.problemName,
    timeLimit: record.timeLimit,
    memoryLimit: record.memoryLimit, 
    accepted: record.accepted,
    AC: record.AC
  }));
  console.log("problems", problems.value);
}




// 显示声明
interface ProblemRecord {
  // 题目在后端全局题库中的序号
  problemNum: number;
  // 实际序号
  problemLetterIndex: number;
  // 题目标题
  problemName: string;
  // 时空限制
  timeLimit: number;
  memoryLimit: number;
  // 通过该题的总人数
  accepted: number;
  // 当前选手是否已经通过该道题目
  AC: boolean;
}



</script>


<style scoped>
.warning-row {
  background-color: #f56c6c;
}
.success-row {
  background-color: #3bde9a;
}
</style>