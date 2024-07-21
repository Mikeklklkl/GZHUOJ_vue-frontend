<template>
  <div class="container" style="margin-top: 5px">
    <el-button @click="changIsShow">
      <el-icon><ArrowLeftBold /></el-icon>
    </el-button>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["click"]);
const changIsShow = () => {
  emits("click");
};
</script>

<style>
</style>