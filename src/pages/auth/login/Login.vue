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
      <el-form :model="formModel" label-width="auto">
        <el-form-item label="Account"  label-size="large">
          <el-input v-model="formModel.userAccount" clearable />
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="formModel.password" type="password" />
        </el-form-item>
      </el-form>
    </div>
    <div style="margin-bottom:50px;">
        <el-button type="primary" round @click="login">登录</el-button>
    </div>

    <div>
        <el-link>
            forget
        </el-link>
    </div>
  </el-card>
</template>
<!-- 现在先完成的第一个功能： 登录校验逻辑 -->
<script setup>
// import { reactive } from "vue";
import {userLoginService} from '@/api/auth.js'
import {ref} from 'vue'
// import { ElMessage } from "element-plus";
// const form = ref()
const formModel = ref({
  userAccount:  '',
  password: ''
});

// const rules ={
//   userAccount: [
//     {required: true , message: '请输入用户名', trigger: 'blur'},
//     {min: 5, max: 10, message: '用户名必须是5—10位字符', trigger: 'blur'}
//   ],
//   password: [
//     {required: true , message: '请输入密码', trigger: 'blur'},
//     {
//       pattern: /^\S{6,15}$/,
//       message: '密码必须是6-15位的非空字符',
//       trigger: 'blur'
//     }
//   ]
// }

const login = async () => {
  await userLoginService(formModel.value)

  ElMessage.success('登录成功');
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
