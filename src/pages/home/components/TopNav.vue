<template>
  <el-tabs type="border-card" style="border-bottom: none;">
    <el-tab-pane label="GZHUOJ主页" >
        <Index></Index>
    </el-tab-pane>
    <el-tab-pane label="团队新闻">
        <TeamNews></TeamNews>
    </el-tab-pane>
    <el-tab-pane label="通知公告">
       <NotAnn></NotAnn>
    </el-tab-pane>
    <el-tab-pane label="解题公告">
      <ProblemReport></ProblemReport>
    </el-tab-pane>
    <el-tab-pane label="竞赛周边">
      <Compeition></Compeition>
    </el-tab-pane>
    <el-tab-pane label="关于">
      <About></About>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import Index from "./Index.vue";
import NotAnn from "./NotAnn.vue";
import TeamNews from "./TeamNews.vue";
import ProblemReport from "./ProblemReport.vue";
import Compeition from "./Compeititon.vue";
import About from "./About.vue";
</script>


<style scoped>

</style>