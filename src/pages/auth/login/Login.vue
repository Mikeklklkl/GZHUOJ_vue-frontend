<script setup>
import {ref} from 'vue'
import {userLoginService} from '@/api/auth.js'
import { userInfoStore } from '@/stores/userInfoStore';
import { useRouter } from 'vue-router';

const userInfo = userInfoStore();
const router = useRouter();

const formModel = ref({
  userAccount:  '',
  password: ''
});

const login = async () => {
  console.log(formModel.value)
  const res = await userLoginService(formModel.value)
  // console.log("token222" , res.headers['token'])
  userInfo.setToken(res.headers['token'])
  // console.log("token111" , userInfo.token)
  userInfo.setUserAccount(res.data.userAccount)
  userInfo.setUserName(res.data.userName)
  
  router.push('/home')
  ElMessage.success("登录成功")
};
</script>

<template >
  <el-card style="width:100%" class="center-container" >
    <div>
      <h1 class="va-h1 text-center">Login</h1>
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
        <!-- <el-button type="primary" round @click="register">注册</el-button> -->
    </div>
  </el-card>
</template>


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
