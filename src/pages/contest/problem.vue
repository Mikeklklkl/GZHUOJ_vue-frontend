<script setup>
import { ref , onMounted} from "vue";
import { useRouter } from "vue-router";
import {getProblemContent} from '@/api/problem.js';

// 保存题目内容字段
const problemTitle = ref('最长上升子序列和')

const descriptionHtml = ref(`123213213213`);
const inputDescriptionHtml = ref(``);
const outputDescriptionHtml = ref(``)
const explanationHtml =  ref(``)

const testExamples = ref([]);


const languageValue = ref("");
const language_options = [
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "Java", label: "Java" },
  { value: "Python3", label: "Python3" },
  { value: "Go", label: "Go" },
];

const getProblemContentEvent = async() => {
  const res = (await getProblemContent({problemNum: 817})).data;
  console.log(res);
  descriptionHtml.value = res.data.descriptionHtml;
  inputDescriptionHtml.value = res.data.inputDescriptionHtml;
  outputDescriptionHtml.value =res.data.outputDescriptionHtml;
  explanationHtml.value = res.data.explanationHtml;
  testExamples.value = res.data.testExamples;
}



onMounted(() => {
  getProblemContentEvent();

})



</script>


<template>
 
 
     
        <TopNavFour />
     

    <el-container>
      <el-main>
        <div class="textdiv" style="display: flex; justify-content: center">
          <!--后续需要在这里读取题目信息-->
          <el-text style="font-size: 30px; color: black" > {{ problemTitle }} </el-text>
        </div>

        <!-- 题面信息 -->
        <div class="textdiv" style="padding-right: 20px">
          <md-view :htmlValue="descriptionHtml"></md-view>
        </div>

        <!-- 输入信息 -->

        <div class="textdiv">  
          <el-text style="font-size: 25px"  class="head-text"> Input </el-text>
        </div>

        <div class="textdiv" style="padding-right: 20px">
          <md-view :htmlValue="inputDescriptionHtml"></md-view>
        </div>

        
        <!-- 输出信息 -->
        <div class="textdiv">
          <el-text style="font-size: 25px"  class="head-text"> Output </el-text>
        </div>

        <div class="textdiv" style="padding-right: 20px">
          <md-view :htmlValue="outputDescriptionHtml"></md-view>
        </div>

        <!-- 样例表 -->
        <div class="textdiv">
          <el-text style="font-size: 25px"  class="head-text"> Example </el-text>
        </div>
        <div class="textdiv" style="padding-right: 20px">
          <div v-for="(item) in testExamples" :key=item.testExampleNum>
          <div class="card">
            <!-- 样例 -->
            <sample-card v-model:input="item.input" v-model:output="item.output"
              editable: false
              v-model:testExampleNum="item.testExampleNum" @sampleDelete="sampleDelete" @sampleUp="sampleUp"
              @sampleDown="sampleDown"></sample-card>
          </div>
        </div>
        </div>

        <!-- 样例说明 -->
        <div class="textdiv">
          <el-text style="font-size: 25px"  class="head-text"> Note </el-text>
        </div>
        <div class="textdiv" style="padding-right: 20px">
          <md-view :htmlValue="explanationHtml"></md-view>
        </div>
      </el-main>

      <el-aside width="20%" style="height: 92vh">
        <div class="center" style="padding-top: 20px">
          <el-text style="font-size: 20px; color: black"> 比赛名称 </el-text>
        </div>
        <div class="center" style="padding-top: 20px">
          <el-text style="font-size: 15px; color: black"> 比赛倒计时 </el-text>
        </div>
        <div  style="padding:20px">
          
            sdaaaaaaaa</br>
            aaaaaaaaaaaaaaaaaa
        </div>
        <div class="textdiv" style="padding-right: 20px">
          <el-text>
            sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </el-text>
        </div>

         <div class="textdiv" style="padding-right: 20px">
          <table class="horizontal-table">
        <tr>
          <th>提交数</th>
          <td>55</td>
        </tr>
        <tr>
          <th>AC数</th>
          <td>55</td>
        </tr>
        <tr>
          <th>错误数</th>
          <td>0</td>
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
  width: 100%; /* 表格宽度设置为100% */
  border-collapse: collapse; /* 合并表格边框 */
}

.horizontal-table th,
.horizontal-table td {
  border: 1px solid #ddd; /* 设置边框 */
  padding: 8px; /* 单元格内边距 */
  text-align: left; /* 文本左对齐，也可以根据需要设置为居中或右对齐 */
}


.head-text {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 16px; /* 可以根据需要调整字体大小 */
  color: black;
  line-height: 1.6; /* 行高可以调整，以增加可读性 */
}
h1 {
  font-size: 24px;
  font-weight: bold; /* 使标题加粗 */
  margin-bottom: 16px;
}
p {
  margin-bottom: 12px; /* 调整段落间距 */
}
ul {
  margin-left: 20px; /* 列表缩进 */
  margin-bottom: 12px;
}
li {
  margin-bottom: 6px; /* 列表项间距 */
}
</style>