<template >
  <div class="common-layout" >
    <el-container style="height:100vh">
      <el-aside width="200px">      
        <SideNav></SideNav>
        </el-aside>
      <el-container>
        <el-main style="padding:0;">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import SideNav from "./components/SideNav.vue";
 </script>

<style scoped>
/*@import url(./style/debug.css);*/


</style>
