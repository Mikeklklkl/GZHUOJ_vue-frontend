<template >
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-aside width="200px" v-show="isShow">
        <SideNav @click="toggleShow" />
      </el-aside>

      <el-container>
        <el-main style="padding: 0">
          <el-button class="floating-button" @click="toggleShow">
            <div v-if="isShow">
              <el-icon>
                <ArrowLeftBold />
              </el-icon>
            </div>
            <div v-else>
              <el-icon>
                <ArrowRightBold />
              </el-icon>
            </div>
          </el-button>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import SideNav from "./components/SideNav.vue";
import { ref } from "vue";

const isShow = ref(true);
const toggleShow = () => {
  isShow.value = !isShow.value;
  console.log(isShow.value);
};
//判断是否展示侧边栏
</script>

<style scoped>
/*@import url(./style/debug.css);*/
.floating-button {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 1000; /* 确保按钮在前面 */
}
</style>
