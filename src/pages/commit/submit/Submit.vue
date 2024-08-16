<template>
  <el-container>
    <el-header>
      <div style="padding-top: 20px; padding-left: 40px">
        <TopNavFour />
      </div>
    </el-header>
    <el-container>
      <el-main>
        <div class="textdiv" style="display: flex; justify-content: center">
          <!--后续需要在这里读取题目信息-->
          <el-text style="font-size: 30px; color: black"> 1000:a+b </el-text>
        </div>

        <div class="textdiv" style="padding-right: 20px">
          <el-text>
            sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdffffffffffffffffffffffffff
          </el-text>
        </div>

        <div class="textdiv">
          <el-text style="font-size: 15px"> Input </el-text>
        </div>

        <div class="textdiv" style="padding-right: 20px">
          <el-text>
            sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </el-text>
        </div>

        <div class="textdiv">
          <el-text style="font-size: 15px"> Output </el-text>
        </div>

        <div class="textdiv" style="padding-right: 20px">
          <el-text>
            sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </el-text>
        </div>

        <div class="textdiv">
          <el-text style="font-size: 15px"> Example </el-text>
        </div>
        <div class="textdiv" style="padding-right: 20px">
          <el-text>
            sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </el-text>
        </div>
        <div class="textdiv">
          <el-text style="font-size: 15px"> Note </el-text>
        </div>
        <div class="textdiv" style="padding-right: 20px">
          <el-text>
            sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </el-text>
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
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TopNavFour from "../../../components/TopNavFour.vue";

const languageValue = ref("");

const language_options = [
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "Java", label: "Java" },
  { value: "Python3", label: "Python3" },
  { value: "Go", label: "Go" },
];
</script>

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
</style>