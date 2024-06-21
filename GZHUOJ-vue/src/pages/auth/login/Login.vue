<template >
  <el-card style="width:100%" class="center-container" >
    <div>
      <h1 class="va-h1 text-center">Login</h1>
    </div>
    <div>
      <p style="font-size: 24px" class="center">
        Have an account?
        <el-link style="font-size: 20px" type="primary"> Sign up </el-link>
      </p>
    </div>
    <div class="center">
      <el-form :model="form" label-width="auto">
        <el-form-item label="name" label-size="large">
          <el-input v-model="form.name" clearable />
        </el-form-item>
        <el-form-item label="pwd">
          <el-input v-model="form.pwd" type="password" />
        </el-form-item>
      </el-form>
    </div>
    <div style="margin-bottom:50px;">
        <el-button type="primary" round>登录</el-button>
    </div>
    <div>
        <el-link>
            forget
        </el-link>
    </div>
  </el-card>
</template>

<script setup>
import { reactive } from "vue";
const form = reactive({
  name: "",
  pwd: "",
});

const onSubmit = () => {
  console.log("submit!");
};
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
