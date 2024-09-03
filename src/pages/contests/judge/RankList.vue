<template>
  <TopNavFour />
  <div class="leaderboard">
    <el-table :data="leaderboardData" border height="85vh">
      <!-- 排名 -->
      <el-table-column prop="rank" label="Place" width="80" align="center">
      </el-table-column>

      <!-- 选手/队伍名称 -->
      <el-table-column prop="name" label="Team" width="200"> </el-table-column>

      <!-- 得分 -->
      <el-table-column prop="score" label="Solved" width="80" align="center">
      </el-table-column>

      <!-- 罚时 -->
      <el-table-column
        prop="penalty"
        label="Penalty"
        width="100"
        align="center"
      >
      </el-table-column>

      <!-- 题目解答状态 -->
      <el-table-column
        v-for="problem in problems"
        :key="problem.name"
        align="center"
      >
        <template #header>
          <div
            :style="{
              backgroundColor: getProblemColor(problem.name),
              width: '30px',
              height: '30px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20%',
            }"
          >
            <div style="color: white; font-weight: bold">
              {{ problem.name }}
            </div>
          </div>
        </template>
        <template #default="scope">
          <div
            v-if="scope.row.results[problem.name].submissions > 0"
            :class="[
              'result-cell',
              getCellClass(scope.row.results[problem.name].passed),
            ]"
            @click="openDialog(scope.row, problem)"
          >
            <div class="submission-symbol">
              {{ scope.row.results[problem.name].passed ? "+" : "-" }}
            </div>
            <div class="submission-details">
              {{ scope.row.results[problem.name].submissions }}/
              <span v-if="scope.row.results[problem.name].passed">
                {{ scope.row.results[problem.name].time }}
              </span>
            </div>
          </div>
        </template>
      </el-table-column>

      <!-- Dirt -->
      <el-table-column prop="dirt" label="Dirt" width="70" align="center">
      </el-table-column>

      <!-- SE -->
      <el-table-column prop="se" label="SE" width="70" align="center">
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      title="Submission Details"
      width="400px"
      :before-close="handleClose"
    >
      <el-table :data="dialogData" style="width: 100%" border>
        <el-table-column prop="label" label="Field" align="center" width="120">
        </el-table-column>
        <el-table-column prop="value" label="Details" align="center">
        </el-table-column>
      </el-table>
      <span v:slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >Close</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopNavFour from "../../../components/TopNavFour.vue";

// 模拟的题目数据，包含每个题目的名称和通过的队伍数量
const problems = ref([
  { name: "A", solvedBy: 2 },
  { name: "B", solvedBy: 2 },
  { name: "C", solvedBy: 1 },
  { name: "D", solvedBy: 3 },
  { name: "E", solvedBy: 0 },
  { name: "F", solvedBy: 0 },
  { name: "G", solvedBy: 0 },
]);

// 模拟的榜单数据
const leaderboardData = ref([
  {
    rank: 1,
    name: "Team Alpha",
    score: 5,
    penalty: 45,
    results: {
      A: { submissions: 1, passed: true, time: "120" },
      B: { submissions: 2, passed: false, time: "" },
      C: { submissions: 3, passed: true, time: "52" },
      D: { submissions: 1, passed: true, time: "10" },
      E: { submissions: 0, passed: false, time: "" },
      F: { submissions: 0, passed: false, time: "" },
      G: { submissions: 0, passed: false, time: "" },
    },
    dirt: 36,
    se: 0.44,
  },
  {
    rank: 2,
    name: "Team Beta",
    score: 4,
    penalty: 30,
    results: {
      A: { submissions: 2, passed: true, time: "150" },
      B: { submissions: 1, passed: true, time: "20" },
      C: { submissions: 0, passed: false, time: "" },
      D: { submissions: 2, passed: true, time: "35" },
      E: { submissions: 3, passed: false, time: "" },
      F: { submissions: 0, passed: false, time: "" },
      G: { submissions: 0, passed: false, time: "" },
    },
    dirt: 36,
    se: 0.44,
  },
  {
    rank: 3,
    name: "Team Gamma",
    score: 4,
    penalty: 50,
    results: {
      A: { submissions: 1, passed: true, time: "115" },
      B: { submissions: 2, passed: false, time: "30" },
      C: { submissions: 1, passed: true, time: "40" },
      D: { submissions: 0, passed: false, time: "" },
      E: { submissions: 1, passed: false, time: "" },
      F: { submissions: 0, passed: false, time: "" },
      G: { submissions: 0, passed: false, time: "" },
    },
    dirt: 36,
    se: 0.44,
  },
]);

// 弹窗控制变量
const dialogVisible = ref(false);
const dialogData = ref([]);

// 显示题目列的标签，并添加通过的队伍数量
const problemLabel = (problem) => {
  return `${problem.name} (${problem.solvedBy})`;
};

// 根据是否通过返回不同的样式类
const getCellClass = (passed) => {
  return passed ? "passed" : "not-passed";
};

// 打开弹窗并设置选中的详细信息
const openDialog = (row, problem) => {
  dialogData.value = [
    { label: "Problem", value: problem.name },
    { label: "Team", value: row.name },
    {
      label: "Status",
      value: row.results[problem.name].passed ? "Passed" : "Failed",
    },
    { label: "Submit Time", value: row.results[problem.name].time || "N/A" },
  ];
  dialogVisible.value = true;
};

// 返回颜色
const getProblemColor = (problem) => {
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
</script>

<style scoped>
.leaderboard {
  margin: 0 auto;
  padding: 20px;
}

.result-cell {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px;
  color: white;
  cursor: pointer;
}

.passed {
  background-color: rgb(61, 171, 61);
}

.not-passed {
  background-color: rgb(255, 125, 125);
}

.submission-symbol {
  font-weight: bold;
  font-size: 1.5em;
}

.submission-details {
  margin-top: 5px;
  font-size: 0.9em;
}

.dialog-footer {
  text-align: right;
}
</style>
