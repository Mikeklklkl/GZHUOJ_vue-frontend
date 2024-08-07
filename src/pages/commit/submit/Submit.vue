<template>
  
    <div class="textdiv">
      <!--后续需要在这里读取题目信息-->
      <el-text style="font-size: 30px; color: black"> 1000:a+b </el-text>
    </div>

    <div class="textdiv">
      <div style="padding-bottom: 30px">
        <el-row >
          <el-col :span="3">
            <el-button>Submit Page</el-button>
          </el-col>
          <el-col :span="3">
            <el-button>Summary</el-button>
          </el-col>
          <el-col :span="3">
            <el-button>Discussion</el-button>
          </el-col>
        </el-row>
      </div>

      <div style="padding-bottom: 20px">
        <el-row>
          <el-col :span="3"> Time Limit: 1 Sec </el-col>
          <el-col :span="4"> Memory Limit : 128Mb </el-col>
          <el-col :span="3"> Submitted:7 </el-col>
          <el-col :span="3"> Solved:6 </el-col>
        </el-row>
      </div>
    </div>

    <div class="textdiv">
      <el-select
        v-model="languageValue"
        placeholder="language"
        style="width: 200px"
      >
        <el-option
          v-for="item in language_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="textdiv">
      <!--这里要放代码进来，有点麻烦-->
    </div>

    <div class="textdiv">
      <el-button type="primary">Submit</el-button>
    </div>

    <div style="height: 40px">
      <!--占位-->
    </div>

</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

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
</style>