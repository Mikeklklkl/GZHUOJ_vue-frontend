<template>
  <el-tabs type="border-card" style="border-bottom: none;">
    <el-tab-pane label="CSG-CPC主页" >
        <Index></Index>
    </el-tab-pane>
    <el-tab-pane label="团队新闻">
        <Notice></Notice>
    </el-tab-pane>
    <el-tab-pane label="通知公告">Role</el-tab-pane>
    <el-tab-pane label="解题公告">Task</el-tab-pane>
    <el-tab-pane label="竞赛周边">Role</el-tab-pane>
    <el-tab-pane label="关于">Task</el-tab-pane>
  </el-tabs>
</template>

<script setup>
import Index from "./Index.vue";
import Notice from "./Notice.vue";

</script>


<style scoped>

</style>