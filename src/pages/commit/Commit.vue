<template>
  <div style="padding: 30px">
    <el-row :gutter="20">
      <el-col :span="7">
        <el-select
          v-model="schoolValue"
          placeholder="School"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in school_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>

      <el-col :span="7">
        <el-select
          v-model="teamValue"
          placeholder="Team"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in team_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>

      <el-col :span="7">
        <el-select
          v-model="statusValue"
          placeholder="Status"
          size="large"
          style="width: 240px"
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
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const schoolValue = ref("");
const teamValue = ref("");
const statusValue = ref("");

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

const commit = [
  {
    problem: "A",
    school: "广州大学",
    team: "888队",
    status: "Accepted",
    submit_time: "04:59:59",
  },
  {
    problem: "A",
    school: "广州大学",
    team: "888队",
    status: "Accepted",
    submit_time: "04:59:59",
  },
  {
    problem: "C",
    school: "广州大学",
    team: "888队",
    status: "Accepted",
    submit_time: "04:59:59",
  },
];

const getProblemColor = (problem: string) => {
  switch (problem) {
    case "A":
      return "red";
    case "B":
      return "green";
    case "C":
      return "blue";
    default:
      return "gray";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Accepted":
      return "green";
  }
};
</script>

<style scoped>
/* 可根据需要在此添加其他样式 */
</style>
