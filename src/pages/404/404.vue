<template>
  <div class="center-container">
    <div class="center">
      <NotFound></NotFound>
    </div>
    <h1 class="va-h1 text-center">Page not found</h1>

    <p class="text-center">
      The page you are looking for might have been removed had its name changed
      or is temporarily unavailable.
    </p>

    <div class="center">
      <VaButton to="/">Go to homepage</VaButton>
    </div>
  </div>
</template>

<script setup>
import NotFound from "./NoFound.vue";
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100vh; /* 设置容器高度为视口高度 */
  text-align: center; /* 文本居中 */
}
.center {
  display: flex;
  justify-content: center; /* 水平居中 */
  margin: 40px; /* 设置元素之间的间距 */
}

</style>
