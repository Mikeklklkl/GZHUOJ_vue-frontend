<template>
  <div>
    <TopNavFour> </TopNavFour>
  </div>
  <div>
    <div>
      <el-text class="centered-container" style="font-size: 25px">
        题目
      </el-text>
      <el-text class="centered-container"> 比赛名字 </el-text>
    </div>

    <div style="padding-top: 20px; padding-left: 20px">
      <el-text> Problem: </el-text>

      <el-select v-model="value" placeholder="Select" style="width: 240px;margin-left:10px">
        <el-option
          v-for="item in problem_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text> Language: </el-text>
 
      <el-select v-model="value" placeholder="Select" style="width: 240px;margin-left:5px">
        <el-option
          v-for="item in language_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text> Code: </el-text>
    </div>
  <div style="padding-top: 20px; padding-left: 20px">
    <el-input
      v-model="textarea"
      style="width: 80%; margin-left: 50px;"
      :rows="8"
      type="textarea"
      placeholder="Please input"
    />
  </div>
  <div class="centered-container">
    <el-button @click="submitData">Submit</el-button>
  </div>
  </div>
</template>

<script lang="ts" setup>
import TopNavFour from "../../../components/TopNavFour.vue";

import axios from 'axios'

import { ref } from 'vue'

const value = ref('')
const textarea = ref('')
const problem_options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const language_options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const submitData = async () => {
  try {
    // 创建要发送的 JSON 数据
    const jsonData = {
      code: textarea.value, // 从 ref 中获取文本域的内容
    }

    // 发送 POST 请求到后端
    const response = await axios.post('YOUR_BACKEND_ENDPOINT_URL', jsonData)

    // 处理响应
    console.log(response.data)
  } catch (error) {
    console.error('Error sending data to the backend:', error)
  }
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