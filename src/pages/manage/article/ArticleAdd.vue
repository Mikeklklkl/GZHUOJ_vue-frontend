<template>
  <div>
    <div style="padding: 20px">
      <el-text style="font-size: 30px; color: black; font-weight: bold">
        Add Article
      </el-text>
    </div>

    <div style="padding-left: 20px; font-size: 15px; color: rgb(148, 148, 148)">
      解题报告：一些赛后愿意公开的内容，不限于题解、标程等；
      <br /><br />
      竞赛周边：一些不一定和本校有关，但适合于向校内学生转发的国内外竞赛信息；
    </div>

    <div class="inputdiv">
      <el-text class="inputtext"> Co-editor: </el-text>
    </div>

    <div class="inputdiv">
      <!--v-model就是绑定的数据-->
      <el-input
        v-model="input"
        placeholder="Split with,Like:user1,user2... At most 6 co-editors"
      />
    </div>

    <div class="inputdiv">
      <el-text class="inputtext"> News Title: </el-text>
    </div>

    <div class="inputdiv">
      <!--v-model就是绑定的数据-->
      <el-input v-model="input" placeholder="News Title..." />
    </div>

    <div class="inputdiv">
      <el-text class="inputtext">Category: </el-text>
      <el-select
        v-model="optionsValue"
        placeholder="请选择"
        size="large"
        style="width: 200px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="inputdiv">
      <el-text class="inputtext">
        Tags(split by ';' , at most 5 tags, each no more than 32
        characters):</el-text
      >
    </div>

    <div class="inputdiv">
      <!--v-model就是绑定的数据-->
      <el-input v-model="input" placeholder="Contest;Solution;Changsha..." />
    </div>

    <div class="inputdiv">
      <el-text class="inputtext"> Content (markdown):</el-text>
    </div>

    <div class="inputdiv">
        <!--markdown组件位置-->
    </div>

    <div class="inputdiv">
        <el-button type="primary">Primary</el-button>
    </div>

    <div style="height:40px">
        <!--为了不让按钮在底部的占位-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");

const optionsValue = ref("");

const options = [
  { value: "团队新闻", label: "团队新闻" },
  { value: "通知公告", label: "通知公告" },
  { value: "解题报告", label: "解题报告" },
  { value: "竞赛周边", label: "竞赛周边" },
];
</script>

<style>
.inputdiv {
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
}

.inputtext {
  font-size: 17px;
  color: black;
}
</style>