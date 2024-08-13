<script setup>
import { ref } from "vue";
import { userLoginService } from "@/api/auth.js";
import { userInfoStore } from "@/stores/userInfoStore";
import { useRouter } from "vue-router";

const userInfo = userInfoStore();
const router = useRouter();
const remember = ref(false);
const radio1 = ref("1");

const formModel = ref({
  userAccount: "",
  password: "",
});

const login = async () => {
  console.log(formModel.value);
  const res = await userLoginService(formModel.value);
  // console.log("token222" , res.headers['token'])
  userInfo.setToken(res.headers["token"]);
  // console.log("token111" , userInfo.token)
  userInfo.setUserAccount(res.data.userAccount);
  userInfo.setUserName(res.data.userName);

  router.push("/home");
  ElMessage.success("登录成功");
};
</script>
<template>
  <div class="centered-container">
    <div class="box">
      <div>
        <h1 class="va-h1">Log in</h1>
      </div>

      <div class="signup-container">
        <h4>New to GZHUOJ ?</h4>

        <h4>
          <el-link type="primary"> Sign up</el-link>
        </h4>
      </div>

      <div style="padding-top: 5px">
        <el-text class="mx-1" size="small">user</el-text>
      </div>

      <div style="margin-top: 6px">
        <el-input
          v-model="formModel.userAccount"
          style="width: 400px"
          placeholder=""
        />
      </div>

      <div style="padding-top: 5px">
        <el-text class="mx-1" size="small">password</el-text>
      </div>
      <div style="margin-top: 6px">
        <el-input
          v-model="formModel.password"
          style="width: 400px"
          type="password"
          placeholder=""
          show-password
        />
      </div>

      <div>
        <el-radio-group v-model="radio1">
          <el-radio value="1" size="large">小组</el-radio>
          <el-radio value="2" size="large"> 个人</el-radio>
        </el-radio-group>
      </div>

      <div class="signup-container">
        <el-checkbox
          v-model="remember"
          label="Keep me signed in on this device"
          size="large"
        />
        <el-link type="primary">Forgot password?</el-link>
      </div>
      <div>
       <el-button style="width:400px" type="primary" @click="login">登录</el-button>
       </div>
    </div>
  </div>
</template>

<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; /* 使容器的高度等于视窗高度 */
}

.box {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.signup-container {
  display: flex;
  align-items: center;
  gap: 20px; /* 控制两个h4之间的间距 */
}
</style>
