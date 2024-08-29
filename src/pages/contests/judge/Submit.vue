<template>
  <div>
    <TopNavFour> </TopNavFour>
  </div>
  <div>
    <div>
      <el-text class="centered-container" style="font-size: 25px">
        提交
      </el-text>
      <!-- <el-text class="centered-container"> 比赛名字 </el-text> -->
    </div>

    <div style="padding-top: 20px; padding-left: 20px">
      <el-text> Problem: </el-text>

      <el-select v-model="problemSelected" placeholder="Select" style="width: 240px;margin-left:10px">
        <el-option
          v-for="item in problemOptions"
          :key="item.value"
          :label="item.key"
          :value="item.value"
        />
      </el-select>
    </div>
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text> Language: </el-text>
 
      <el-select v-model="languageSelected" placeholder="Select" style="width: 240px;margin-left:5px">
        <el-option
          v-for="item in languageOptions"
          :key="item.value"
          :label="item.key"
          :value="item.value"
        />
      </el-select>
    </div>
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text> Code: </el-text>
    </div>
  <div style="padding-top: 20px; padding-left: 20px">
    <el-input
      v-model="submitCode"
      style="width: 80%; margin-left: 50px;"
      :rows="16"
      type="textarea"
      placeholder="Please input"
    />
  </div>
  <div class="centered-container">
    <el-button @click="submitEventHandler">Submit</el-button>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import {
  submitService, getLanguageOptionsService,
  getProblemOptionsService
} from "@/api/contest.js"
import { userInfoStore } from '@/stores/userInfoStore';

const router = useRouter()
const route = useRoute()
const userInfo = userInfoStore()


const problemSelected = ref('')
const languageSelected = ref('')
const submitCode = ref('')

const problemOptions = ref<Option[]>([{
  key: "A",
  value: 1
}])

const languageOptions = ref<Option[]>([{
  key: "c++",
  value: 1
}])

// TODO 早晚有一天，把它给整改了
const getProblemOptions = async() => {
  const res = (await getProblemOptionsService({contestId: route.params.contestId})).data
  problemOptions.value = res.data.options;
  console.log("problems", problemOptions.value);
}
const getLanguageOptions = async() => {
  const res = (await getLanguageOptionsService({contestId: route.params.contestId})).data
  languageOptions.value = res.data.options
  console.log("language:", languageOptions.value);
}

const submitEventHandler = async () =>{
  await submitService({
    contestId: route.params.contestId,
    problemId: problemSelected.value,
    language: languageSelected.value,
    code: submitCode.value,
    teamAccount: userInfo.teamAccount
  })
}

onMounted(() =>{
  getProblemOptions();
  getLanguageOptions();
})


interface Option{
  key: string,
  value: number
}
</script>

<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
</style>