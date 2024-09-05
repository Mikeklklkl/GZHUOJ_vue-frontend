<template>
<div style="padding-left:20px;">
  <el-card 
    style="width: 240px; height: 280px; margin-left: 25px;margin-top: 20px;margin-bottom: 20px;" 
    shadow="always"
    @click="getContestDetail(contestId)"
  >
    <!-- 图片区域 -->
    <el-image
      style="width: 100%; height: 120px; object-fit: cover;"
      :src="imageUrl"
      alt="比赛图片"
      fit="cover"
    />
    
    <!-- 比赛标题 -->
    <div style="margin-top: 7px; margin-bottom: 10px; font-size: 20px;">比赛题目</div>
    
    <!-- 比赛简介 -->
    <div style="margin-bottom: 7px; color: rgb(120, 120, 120); font-size: 13px;">
      比赛信息/简介blblbl或者可以写比赛背景
    </div>
    
    <!-- 比赛起止时间 -->
    <div style="margin-top: auto; font-size: 13px; color: rgb(100, 100, 100);">
      开始时间: {{ startTime }}<br>
      结束时间: {{ endTime }}
    </div>
  </el-card>
  </div>
</template>



<script  setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 图片链接和比赛时间
const imageUrl = ref('');  // 从后端获取图片URL
const startTime = ref('2024-09-01');  // 替换为实际开始时间
const endTime = ref('2024-09-05');  // 替换为实际结束时间

// 路由实例
const router = useRouter();
const contestId = ref(123);  // 这里设置比赛ID，实际使用时替换为动态数据

// 定义跳转函数
const getContestDetail = (id) => {
  // 假设有一个全局状态管理sideNavShowFlag，关闭侧边栏
  // sideNavShowFlag.value = false;

  router.push({
    name: "contest-problem-set",
    params: {
      contestNum: id, // 传递比赛ID
    },
  }).catch(err => {
    console.error(err);
  });
  
  console.log("跳转到比赛题目集");
};
</script>

<style>

</style>