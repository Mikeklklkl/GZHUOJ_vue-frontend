<template>
  <!--初始页面设置为Article的第一个选项页面-->
  <div style="background-color: rgb(255, 255, 255); height: 100%">
    <TopNav></TopNav>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import TopNav from "./components/TopNav.vue";


</script>

<style>
.backcolor {
  background-color: rgb(246, 246, 246);
  height: 100vh;
}
</style>