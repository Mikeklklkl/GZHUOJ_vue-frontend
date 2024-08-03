<template>
  <div>
    <div style="padding: 20px">
      <el-text style="font-size: 20px"> Source Code </el-text>
      <el-text type="primary"> [expand] </el-text>
    </div>
    <div class="pre-container"> 
      <pre><code class="language-javascript">{  
   code  
   SDD44D
}  
</code></pre>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";


</script>


<style scoped>
.pre-container {  
    display: flex;  
    justify-content: center; /* 水平居中 */  
    /* 如果需要垂直居中，可以添加 align-items: center; */  
}  

pre {
  background-color: #f8f9fa; /* 浅灰色背景 */
  color: #343a40; /* 深灰色文字 */
  border-radius: 5px; /* 圆角边框 */
  border: 1px solid #ced4da; /* 边框颜色 */
  overflow-x: auto; /* 允许横向滚动 */
  padding: 1rem; /* 内边距 */
  margin-bottom: 1.5rem; /* 外边距 */
  width: 90%;
}
pre {
  scrollbar-width: thin;
  scrollbar-color: #6c5ce7 #f1f1f1; /* 滚动条颜色和轨道颜色 */
}

/* Chrome, Safari, Edge */
pre::-webkit-scrollbar {
  width: 10px;
}

pre::-webkit-scrollbar-thumb {
  background: #6c5ce7; /* 滚动条颜色 */
  border-radius: 10px;
}

pre::-webkit-scrollbar-track {
  background: #f1f1f1; /* 滚动条轨道颜色 */
  border-radius: 10px;
}
</style>