<template>
 <TopNavFour/>
  <div style="padding: 20px">

   



    <el-row :gutter="20">
      <el-col :span="5">
        <!--这里是题目的选择，但需要和后端拿数据就没显示-->
        <el-select
          v-model="teamValue"
          placeholder="problem"
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
          v-model="schoolValue"
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
          v-model="teamValue"
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
          v-model="statusValue"
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
              <span :style="{ color: getColor(item.value) }">{{
                item.label
              }}</span>
            </el-option>
          </template>
        </el-select>
      </el-col>

      <el-col :span="3">
        <el-button>
          <el-icon><Search /></el-icon>
        </el-button>
      </el-col>
    </el-row>
  </div>

  <div>
    <el-table
      :data="commit"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="problem" label="PROBLEM" width="120">
        <template v-slot="scope">
          <div
            :style="{
              backgroundColor: getProblemColor(scope.row.problem),
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
              {{ scope.row.problem }}
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="school" label="SCHOOL" width="220" />
      <el-table-column prop="team" label="TEAM" width="400" />
      <el-table-column prop="status" label="STATUS" width="180">
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
      <el-table-column prop="submit_time" label="SUBMIT TIME">
      </el-table-column>
      <el-table-column prop="detail" label="DETAIL">
        <template #default="scope">
          <div @click="goToDetail(scope.row.detail)" style="cursor: pointer">
            {{ scope.row.detail }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import TopNavFour from "../../../components/TopNavFour.vue";

const schoolValue = ref("");
const teamValue = ref("");
const statusValue = ref("");

const router = useRouter();

const school_options = [
  { value: "中山大学", label: "中山大学" },
  { value: "华南理工大学", label: "华南理工大学" },
  { value: "广州大学", label: "广州大学" },
  { value: "广东工业大学", label: "广东工业大学" },
  { value: "华南师范大学", label: "华南师范大学" },
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

const getColor = (value: string) => {
  switch (value) {
    case "Accepted":
      return "green";
    case "Compilation Error":
      return "red";
    case "Memory Limit Exceeded":
      return "blue";
    case "Output Limit Exceeded":
      return "purple";
    case "Runtime Error":
      return "orange";
    case "Time Limit Exceeded":
      return "teal";
    case "Wrong Answer":
      return "brown";
    default:
      return "black";
  }
};

//这里的detail应该得是每一个队伍自己题目的提交索引，根据这个来展示不同的页面
const commit = [
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
];

const getProblemColor = (problem: string) => {
  switch (problem) {
    case "A":
      return "rgb(209,86,86)";
    case "B":
      return "rgb(181,98,228)";
    case "C":
      return "rgb(87,98,143)";
    case "D":
      return "rgb(103,226,118)";
    case "E":
      return "rgb(244,228,82)";
    case "F":
      return "rgb(247,138,90)";
    case "G":
      return "rgb(84,129,173)";
    case "H":
      return "rgb(186,185,185)";
    case "I":
      return "rgb(79,184,157)";
    case "J":
      return "rgb(150,211,255)";
    default:
      return "gray";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Accepted":
      return "green";
    case "Compilation Error":
      return "red";
    case "Memory Limit Exceeded":
      return "blue";
    case "Output Limit Exceeded":
      return "purple";
    case "Runtime Error":
      return "orange";
    case "Time Limit Exceeded":
      return "teal";
    case "Wrong Answer":
      return "brown";
    default:
      return "black";
  }
};

const goToDetail = (detailId: string) => {
  // 使用router.push来导航到/detail路由，并传递查询参数
  router.push({
    path: "/detail",
    query: {
      detail: detailId, // 这里传递的是detailId参数
    },
  });
  console.log("跳转detail页面");
};
</script>

<style scoped>
/* 可根据需要在此添加其他样式 */
</style>
