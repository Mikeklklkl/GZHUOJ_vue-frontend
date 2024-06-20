<template>
  <div class="common-layout">
    <el-container style="height:100vh">
      <el-aside width="200px">      
        <SideNav></SideNav>
        </el-aside>
      <el-container>
        <el-header>
          <TopNav></TopNav>
          </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import SideNav from "./components/SideNav.vue";
import TopNav from "./components/TopNav.vue";
 </script>

<style scoped>
/*@import url(./style/debug.css);*/


</style>
