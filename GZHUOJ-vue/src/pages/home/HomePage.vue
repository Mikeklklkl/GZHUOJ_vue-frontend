<template>
  <div style="background-color: rgb(255, 255, 255); height: 100%">
    <TopNav></TopNav>
    <div style="padding: 20px">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import TopNav from "./components/TopNav.vue";
</script>

<style scoped>
</style>
 