<template>
  <div>
    <div>
      <el-row class="tac">
        <el-col>
          <el-menu :default-active="activeIndex" active-text-color="#f1c40f" background-color="#3A5A40" text-color="#fff" style="border: 0">
            <el-menu-item index="1" @click="goToHomePage"  class="side-nav-font">
              <div>
                <el-icon>
                  <HomeFilled />
                </el-icon>
                <span>Home</span>
              </div>
            </el-menu-item>

            <el-menu-item index="4" @click="goToCompetition"  class="side-nav-font">
              <div>
                <el-icon>
                  <Grid />
                </el-icon>
                <span>Contest</span>
              </div>
            </el-menu-item>
            <el-menu-item index="2" @click="goToQuestion"  class="side-nav-font">
              <div>
                <el-icon>
                  <List />
                </el-icon>
                <span>Problems</span>
              </div>
            </el-menu-item>

            <el-menu-item index="3" @click="goToCommit"  class="side-nav-font">
              <div>
                <el-icon>
                  <Histogram />
                </el-icon>
                <span>Submission</span>
              </div>
            </el-menu-item>

            <el-menu-item index="9" @click="goToManage"  class="side-nav-font">
              <div>
                <el-icon>
                  <UserFilled />
                </el-icon>
                <span>Manager</span>
              </div>
            </el-menu-item>

            <!-- <el-menu-item index="8"  class="side-nav-font">
              <div>
                <el-icon>
                  <BellFilled />
                </el-icon>
                <span>FAQ</span>
              </div>
            </el-menu-item> -->
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <span></span>
    <div class="demo-image" style="background-color: white" >
      <el-image class="full-image" :src="logoSrc" fit="contain"> </el-image>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";

const logoSrc = ref("/gzhu_logo.png");

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
const goToCommit = () => {
  console.log("跳转到contest-submission-detail");
  router.push({ name: "contest-submission-detail" });

};


const emits = defineEmits(["click"])
const changIsShow = () => {
  emits("click")
}

</script>

<style scoped>

/* 选中状态时字体变为黄色，取消默认下划线 */
:deep(.el-menu-item.is-active) {
  color: #f1c40f !important;
  background-color: transparent !important;
  border-bottom: none !important; /* 取消下划线 */
}


/* 设置悬浮时的字体颜色 */
:deep(.el-menu-item:hover) {
  color: #ffd04b !important; /* 悬浮时的字体颜色 */
  background-color: transparent !important; /* 禁止背景色变化 */
}

/*@import url(../style/debug.css);*/
.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 确保图片覆盖并保持比例 */
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* 禁用滚动 */
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
}

.container::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}

.text-center {
  text-align: center;
  /* 水平居中 */
}
</style>
