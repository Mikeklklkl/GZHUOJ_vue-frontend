<template>
  <div>
    <div class="demo-image" style="background-color: #545c64">
      <el-image class="full-image" :src="url" fit="contain"> </el-image>
    </div>

    <div>
      <el-row class="tac">
        <el-col>
          <el-menu
            active-text-color="#ffd04b"
            background-color="rgb(20, 55, 95)"
            text-color="#fff"
            style="border: 0"
          >
            <el-menu-item index="1" @click="goToHomePage">
              <el-icon><HomeFilled /></el-icon>
              <span>主页</span>
            </el-menu-item>
            <el-menu-item index="2" @click="goToQuestion">
              <el-icon><List /></el-icon>
              <span>开放题目集</span>
            </el-menu-item> 

             <el-menu-item index="3" @click="goToCommit">
              <el-icon><Histogram /></el-icon>
              <span>提交状态</span>
            </el-menu-item> 

            <el-menu-item index="4" @click="goToCompetition">
              <el-icon><Grid /></el-icon>
              <span>比赛</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon><TrendCharts /></el-icon>
              <span>XCPC标准比赛</span>
            </el-menu-item> 
             <el-menu-item index="7">
              <el-icon><StarFilled /></el-icon>
              <span>ACM技巧</span>
            </el-menu-item> 
             <el-menu-item index="8">
              <el-icon><BellFilled /></el-icon>
              <span>常见疑问</span>
            </el-menu-item> 
            <el-menu-item index="9" @click="goToManage">
              <el-icon><UserFilled /></el-icon>
              <span>管理页面</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div >
      <div class="container">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          style="margin-top: 2px; margin-bottom: 7px"
        />
      </div>
<!-- 
      <div class="container">
        <el-text class="w-150px mb-2" style="margin-top: 5px" truncated>
          Self element set width 100px5555555555555555555555555555555555
        </el-text>
      </div> -->

      <div class="container" style="margin-top: 5px">
        <el-button type="primary">注册</el-button>
        <el-button type="primary" @click="goToLogin">登录</el-button>
      </div>

      <!--
      <div class="container" style="margin-top: 5px">
        <el-button @click="changIsShow">
          <el-icon><ArrowLeftBold /></el-icon>
        </el-button>
      </div>
      -->
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";

const router = useRouter();

const goToQuestion = () => {
  router.push({ name: "problems" });
  console.log("跳转到problems");
};

const goToHomePage = () => {
  router.push({ name: "HomePage" });
  console.log("跳转到HomePage");
};

const goToCompetition = () => {
  router.push({ name: "contests" });
  console.log("跳转到contests");
};

const goToManage = () => {
  router.push({ name: "manage" });
  console.log("跳转到manage");
};

const goToLogin = () => {
  router.push({ name: "login" });
  console.log("跳转到login");
};

const goToCommit = () => {
  console.log("跳转到contest-submission-detail");
  router.push({ name: "contest-submission-detail" });

};


const emits = defineEmits(["click"])
const changIsShow =()=>{
  emits("click")
}

</script>

<style>
/*@import url(../style/debug.css);*/
.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片覆盖并保持比例 */
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 禁用滚动 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.text-center {
  text-align: center; /* 水平居中 */
}
</style>
