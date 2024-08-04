<template>
  <div>
    <div style="padding: 20px; border-bottom: 2px solid rgb(114, 114, 114)">
      <el-text style="font-size: 30px; color: black; font-weight: bold"
        >Submission #56289571</el-text
      >
    </div>

    <div style="padding: 20px">
      <el-text style="font-size: 20px; color: black"> Source Code </el-text>
      <el-text type="primary"> [expand] </el-text>
    </div>

    <div class="pre-container">
      <pre><code class="language-javascript">{  
   code  
   SDD44D
   {
    
   }
}  

</code></pre>
    </div>

    <div style="padding: 20px">
      <el-text style="font-size: 20px; color: black">Submission Info</el-text>
    </div>

    <div style="padding: 20px">
      <!--横向表格，这里实在用不了element-->

      <table class="horizontal-table">
        <tr>
          <th>Submission Time</th>
          <td>2024-08-03 20:54:36</td>
        </tr>
        <tr>
          <th>Task</th>
          <td>E - Maximum Glutton</td>
        </tr>
        <tr>
          <th>User</th>
          <td>lantingyixu</td>
        </tr>

        <tr>
          <th>Language</th>
          <td>C++ 17 (gcc 12.2)</td>
        </tr>
        <tr>
          <th>Score</th>
          <td>475</td>
        </tr>
        <tr>
          <th>Code Size</th>
          <td>791 Byte</td>
        </tr>

        <tr>
          <th>Status</th>
          <td>AC</td>
        </tr>
        <tr>
          <th>Exec Time</th>
          <td>60 ms</td>
        </tr>
        <tr>
          <th>Memory</th>
          <td>6996 KB</td>
        </tr>
      </table>
    </div>

    <div style="padding: 20px">
      <el-text style="font-size: 20px; color: black">Compile Error</el-text>
    </div>

    <div style="margin: 20px; background-color: rgb(190, 190, 190)">
      <el-text style="padding: 20px"> 错误信息 </el-text>
    </div>

    <div style="padding: 20px">
      <el-text style="font-size: 20px; color: black">Judge Result</el-text>
    </div>

    <div style="padding: 20px">
      <table class="horizontal-table">
        <tr>
          <th>Submission Time</th>
          <td>Sample</td>
          <td>All</td>
        </tr>
          <tr>
          <th>Score / Max Score</th>
          <td>0 / 0</td>
          <td>475 / 475</td>
        </tr>
          <tr>
          <th>Status</th>
          <td>AC x 4</td>
          <td>AC x 36</td>
        </tr>
      </table>
    </div>
    <div style="height:50px">

    </div>
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
  color: rgb(114, 114, 114);
}

.horizontal-table {
  width: 100%; /* 表格宽度设置为100% */
  border-collapse: collapse; /* 合并表格边框 */
}

.horizontal-table th,
.horizontal-table td {
  border: 1px solid #ddd; /* 设置边框 */
  padding: 8px; /* 单元格内边距 */
  text-align: left; /* 文本左对齐，也可以根据需要设置为居中或右对齐 */
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