<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getProblemContentService, getContestProblemCalculateService, getContestBasicInfoService } from "@/api/contest.js"
import { letterToNumber } from "@/utils/transferUtils.js"

const route = useRoute();
const router = useRouter();

// 保存题目内容字段
const problemTitle = ref("最长上升子序列和");

const descriptionHtml = ref(`123213213213`);
const inputDescriptionHtml = ref(``);
const outputDescriptionHtml = ref(``);
const explanationHtml = ref(``);

const testExamples = ref([]);

// 右边栏信息
// 1. 基础比赛信息
const contestTitle = ref("aaa")
const contestStartTime = ref()
const contestEndTime = ref()
const remainTimesCountDown = ref()

// 2. 过题详情信息
const total = ref()
const acTotal = ref()


const getProblemContentEvent = async () => {
  const problemLetter = route.params.problemLetterInContest
  const problemLetterIndex = letterToNumber(problemLetter)
  const contestNum = route.params.contestNum

  // 1. 获取题目内容信息
  var res = (await getProblemContentService({
    contestNum: contestNum,
    problemNumInContest: problemLetterIndex
  })).data;
  console.log(res);
  descriptionHtml.value = res.data.descriptionHtml;
  inputDescriptionHtml.value = res.data.inputDescriptionHtml;
  outputDescriptionHtml.value = res.data.outputDescriptionHtml;
  explanationHtml.value = res.data.explanationHtml;
  testExamples.value = res.data.testExamples;

};

// 比赛基本信息、 比赛名称基本姓名等
const getContestBasicInfo = async () => {
  const problemLetter = route.params.problemLetterInContest
  const problemLetterIndex = letterToNumber(problemLetter)
  const contestNum = route.params.contestNum
  const res = (await getContestBasicInfoService({
    contestNum: contestNum
  })).data;
  contestTitle.value = res.data.title;
  contestStartTime.value = res.data.startTime;
  contestEndTime.value = res.data.endTime;
  remainTimesCountDown.value = res.data.endTime;
}

// 右边栏的基础过题信息
const getContestProBasicCacl = async () => {
  console.log("cacl here")
  const problemLetter = route.params.problemLetterInContest
  const problemLetterIndex = letterToNumber(problemLetter)
  console.log(problemLetterIndex);
  const contestNum = route.params.contestNum
  const res = (await getContestProblemCalculateService({
    contestNum: contestNum,
    problemLetterIndex: problemLetterIndex
  })).data;
  total.value = res.data.total
  acTotal.value = res.data.acTotal
}


onMounted(() => {
  getProblemContentEvent()
  getContestBasicInfo()
  console.log(contestTitle.value)
  getContestProBasicCacl()
});
</script>


<template>
  <TopNavFour />

  <el-container>
    <el-main>
      <div class="textdiv" style="display: flex; justify-content: center">
        <!--后续需要在这里读取题目信息-->
        <el-text style="font-size: 30px; color: black"> {{ problemTitle }} </el-text>
      </div>

      <!-- 题面信息 -->
      <div class="textdiv" style="padding-right: 20px">
        <md-view :htmlValue="descriptionHtml"></md-view>
      </div>

      <!-- 输入信息 -->

      <div class="textdiv">
        <el-text style="font-size: 25px" class="head-text"> Input </el-text>
      </div>

      <div class="textdiv" style="padding-right: 20px">
        <md-view :htmlValue="inputDescriptionHtml"></md-view>
      </div>


      <!-- 输出信息 -->
      <div class="textdiv">
        <el-text style="font-size: 25px" class="head-text"> Output </el-text>
      </div>

      <div class="textdiv" style="padding-right: 20px">
        <md-view :htmlValue="outputDescriptionHtml"></md-view>
      </div>

      <!-- 样例表 -->
      <div class="textdiv">
        <el-text style="font-size: 25px" class="head-text"> Example </el-text>
      </div>
      <div class="textdiv" style="padding-right: 20px">
        <div v-for="(item) in testExamples" :key=item.testExampleNum>
          <div class="card">
            <!-- 样例 -->
            <sample-card v-model:input="item.input" v-model:output="item.output" :editable = false
              v-model:testExampleNum="item.testExampleNum" @sampleDelete="sampleDelete" @sampleUp="sampleUp"
              @sampleDown="sampleDown"></sample-card>
          </div>
        </div>
      </div>

      <!-- 样例说明 -->
      <div class="textdiv">
        <el-text style="font-size: 25px" class="head-text"> Note </el-text>
      </div>
      <div class="textdiv" style="padding-right: 20px">
        <md-view :htmlValue="explanationHtml"></md-view>
      </div>
    </el-main>

    <!-- 测边框 -->
    <el-aside width="20%" style="height: 92vh">
      <div class="center" style="padding-top: 100px; padding-left: 20px">
        <el-text style=" font-size: 20px; color: black"> {{contestTitle}} </el-text>
      </div>
      <!-- <div class="center" style="padding-top: 20px">
        <el-text style="font-size: 15px; color: black"> </el-text>
      </div> -->
      <!-- <div style="padding:20px">
        <br>
      </div> -->
      <div class="textdiv" style="padding-right: 20px">
        <el-col :span="8">
          <el-countdown title="Remaining  time" format="HH:mm:ss" :value="remainTimesCountDown" />
        </el-col>
      </div>

      <div class="textdiv" style="padding-right: 100px">
        <table class="horizontal-table">
          <tr>
            <th>提交数</th>
            <td>{{total}}</td>
          </tr>
          <tr>
            <th>AC数</th>
            <td>{{acTotal}}</td>
          </tr>
        </table>
      </div>
    </el-aside>
  </el-container>

</template>


<style>
.textdiv {
  padding-top: 20px;
  padding-left: 20px;
}

.center {
  display: flex;
  justify-content: center;
}

.horizontal-table {
  width: 100%;
  /* 表格宽度设置为100% */
  border-collapse: collapse;
  /* 合并表格边框 */
}

.horizontal-table th,
.horizontal-table td {
  border: 3px solid #939fca;
  /* 设置边框 */
  padding: 8px;
  /* 单元格内边距 */
  text-align: left;
  /* 文本左对齐，也可以根据需要设置为居中或右对齐 */
}

.head-text {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  /* 可以根据需要调整字体大小 */
  color: black;
  line-height: 1.6;
  /* 行高可以调整，以增加可读性 */
}

h1 {
  font-size: 24px;
  font-weight: bold;
  /* 使标题加粗 */
  margin-bottom: 16px;
}

p {
  margin-bottom: 12px;
  /* 调整段落间距 */
}

ul {
  margin-left: 20px;
  /* 列表缩进 */
  margin-bottom: 12px;
}

li {
  margin-bottom: 6px;
  /* 列表项间距 */
}
</style>