<template>
<div style="padding-left:5px;">
  <el-card 
    style="width: 350px; height: 350px; margin-left: 30px;margin-top: 30px;margin-bottom: 10px;" 
    shadow="always"
    @click="getContestDetail(props.contest.contestNum)"
  >
    <!-- 图片区域 -->
    <el-image
      style="width: 100%; height: 120px; object-fit: cover;"
      :src="imageUrl"
      alt="比赛图片"
      fit="cover"
    />
  
    <!-- 比赛标题 -->
    <div style="margin-top: 20px; margin-bottom: 20px; font-size: 20px;">{{props.contest.title}}</div>
    
    <!-- 比赛简介 -->
    <div style="margin-bottom: 7px; color: rgb(120, 120, 120); font-size: 13px;">
      TODO
    </div>
    
    <!-- 比赛起止时间 -->
    <div style="margin-top: auto; font-size: 13px; color: rgb(100, 100, 100);">
      开始时间: {{props.contest.startTime}}<br>
      结束时间: {{props.contest.endTime}}
    </div>
  </el-card>
  </div>
</template>



<script  setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  contest: {
    type: Object,
    require: true
  }
})

const router = useRouter();

// 图片链接和比赛时间
const imageUrl = ref('');  // 从后端获取图片URL
// 路由实例


// 定义跳转函数
const getContestDetail = (id) => {
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