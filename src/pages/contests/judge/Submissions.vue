<template>
  <TopNavFour />
  <div style="padding: 20px">
    <el-row :gutter="20">
      <el-col :span="5">
        <!--这里是题目的选择，但需要和后端拿数据就没显示-->
        <el-select
          v-model="problemLetter"
          placeholder="problem"
          size="large"
          style="width: 200px"
        >
          <el-option
            v-for="item in problemOptions"
            :key="item.value"
            :label="item.key"
            :value="item.value"
          />
        </el-select>
      </el-col>

      <el-col :span="5">
        <el-select
          v-model="school"
          placeholder="School"
          size="large"
          style="width: 200px"
        >
          <el-option
            v-for="item in school_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>

      <el-col :span="5">
        <el-select
          v-model="team"
          placeholder="Team"
          size="large"
          style="width: 200px"
        >
          <el-option
            v-for="item in team_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>

      <el-col :span="5">
        <el-select
          v-model="status"
          placeholder="Status"
          size="large"
          style="width: 200px"
        >
          <template #default="{ item, index }">
            <el-option
              v-for="(item, index) in status_options"
              :key="item.value"
              :value="item.value"
            >
              <span :style="{ color: getStatusColor(item.value) }">{{
                item.label
              }}</span>
            </el-option>
          </template>
        </el-select>
      </el-col>

      <el-col :span="3">
        <el-button @click="getSubmissionsEventHandler()">
          <el-icon>
            <Search />
          </el-icon>
        </el-button>
      </el-col>
    </el-row>
  </div>
  <div>
    <el-table :data="submissions" style="width: 100%" height="530">
      <el-table-column prop="problemLetter" label="PROBLEM" width="200">
        <template v-slot="scope">
          <div
            :style="{
              backgroundColor: getProblemColor(scope.row.problemLetter),
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '10px',
              borderRadius: '20%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }"
          >
            <div style="color: white">
              {{ scope.row.problemLetter }}
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="school" label="SCHOOL" width="400" />
      <el-table-column prop="team" label="TEAM" width="400" />
      <el-table-column prop="status" label="STATUS" width="200">
        <template v-slot="scope">
          <div
            :style="{
              color: getStatusColor(scope.row.status),
            }"
          >
            {{ scope.row.status }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="submitTime" label="SUBMIT TIME" width="150">
      </el-table-column>
      <el-table-column prop="school" label="LANGUAGE" width="150" />
      <el-table-column prop="detail" label="DETAIL">
        <template #default="scope">
          <div @click="goToDetail(scope.row.detail)" style="cursor: pointer">
            {{ scope.row.detail }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div style="padding:20px;">
    <el-pagination
      :visible="true"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40, 50, 60]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="getSubmissionsEventHandler"
      @current-change="getSubmissionsEventHandler"
      @prev-click="getSubmissionsEventHandler"
      @next-click="getSubmissionsEventHandler"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import TopNavFour from "../../../components/TopNavFour.vue";
import {
  getProblemColor,
  getStatusColor,
  numberToLetter,
  getStatusMessage,
} from "@/utils/transferUtils.js";
import { getContestSubmissionsService } from "@/api/contest.js";
import { letterToNumber } from "@/utils/transferUtils.js";

const router = useRouter();
const route = useRoute();

// 分页器、相关字段：
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);

const problemLetter = ref(null);
const school = ref(null);
const team = ref(null);
const status = ref(null);

const problemOptions = [{ key: "A", value: "0" }];
const school_options = [
  { key: "中山大学", value: "中山大学" },
  { key: "华南理工大学", value: "华南理工大学" },
  { key: "广州大学", value: "广州大学" },
  { key: "广东工业大学", value: "广东工业大学" },
  { key: "华南师范大学", value: "华南师范大学" },
];
const team_options = [
  { value: "Team A", label: "Team A" },
  { value: "Team B", label: "Team B" },
  { value: "Team C", label: "Team C" },
];
const status_options = [
  { value: "Accepted", label: "Accepted" },
  { value: "Compilation Error", label: "Compilation Error" },
  { value: "Memory Limit Exceeded", label: "Memory Limit Exceeded" },
  { value: "Output Limit Exceeded", label: "Output Limit Exceeded" },
  { value: "Runtime Error", label: "Runtime Error" },
  { value: "Time Limit Exceeded", label: "Time Limit Exceeded" },
  { value: "Wrong Answer", label: "Wrong Answer" },
];

//这里的detail应该得是每一个队伍自己题目的提交索引，根据这个来展示不同的页面
const submissions = ref([
  {
    problem: "A",
    school: "广州大学",
    team: "888队",
    status: "Accepted",
    submit_time: "04:59:59",
    detail: "11224",
  },
  {
    problem: "B",
    school: "广州大学",
    team: "888队",
    status: "Compilation Error",
    submit_time: "04:59:59",
    detail: "11223",
  },
  {
    problem: "C",
    school: "广州大学",
    team: "888队",
    status: "Memory Limit Exceeded",
    submit_time: "04:59:59",
  },
  {
    problem: "D",
    school: "广州大学",
    team: "888队",
    status: "Output Limit Exceeded",
    submit_time: "04:59:59",
  },
  {
    problem: "E",
    school: "广州大学",
    team: "888队",
    status: "Runtime Error",
    submit_time: "04:59:59",
  },

  {
    problem: "F",
    school: "广州大学",
    team: "888队",
    status: "Time Limit Exceeded",
    submit_time: "04:59:59",
  },
  {
    problem: "G",
    school: "广州大学",
    team: "888队",
    status: "Wrong Answer",
    submit_time: "04:59:59",
  },
  {
    problem: "H",
    school: "广州大学",
    team: "888队",
    status: "Wrong Answer",
    submit_time: "04:59:59",
  },
  {
    problem: "I",
    school: "广州大学",
    team: "888队",
    status: "Accepted",
    submit_time: "04:59:59",
  },
  {
    problem: "J",
    school: "广州大学",
    team: "888队",
    status: "Accepted",
    submit_time: "04:59:59",
  },
]);
const goToDetail = (detailId) => {
  // 使用router.push来导航到/detail路由，并传递查询参数
  router.push({
    path: "/detail",
    query: {
      detail: detailId, // 这里传递的是detailId参数
    },
  });
  console.log("跳转detail页面");
};

const getSubmissionsEventHandler = async () => {
  const res = (
    await getContestSubmissionsService({
      contestNum: route.params.contestNum,
      problemLetterIndex: letterToNumber(problemLetter.value),
      teamName: team.value,
      school: school.value,
      status: status.value,

      currentPage: currentPage.value,
      pageSize: pageSize.value,
    })
  ).data;
  submissions.value = res.data.records.map((record) => ({
    problemLetter: numberToLetter(record.problemLetterIndex),
    school: record.school,
    submitTime: record.submitTime,
    detail: record.submitId,
    status: getStatusMessage(record.status),
    team: record.teamName,
  }));
  console.log("size:", submissions.value.length);
  console.log("value", submissions.value);
  total.value = res.data.total;
};

onMounted(() => {
  getSubmissionsEventHandler();
});
</script>

<style scoped>
/* 可根据需要在此添加其他样式 */
</style>
