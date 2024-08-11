<script setup>
  import { ElMessage } from 'element-plus';
  import {defineModel, defineEmits} from 'vue'

  const emit = defineEmits(['sampleDelete' , 'sampleUp' , 'sampleDown'])

  /*
   * testExampleNum
   * input
   * output 
  */ 
  const input = defineModel('input')
  const output = defineModel('output')
  const testExampleNum = defineModel('testExampleNum')

  const props = defineProps({
    editable: {
      type: Boolean,
      required: false
    }
  })

  // 点击按钮处理逻辑
  const sampleDelete = () =>{
    console.log("里" , testExampleNum.value)
    emit('sampleDelete', testExampleNum.value)
  }
  const sampleUp = () =>{
    emit('sampleUp', testExampleNum.value)
  }
  const sampleDown = () =>{
    emit('sampleDown', testExampleNum.value)
  }

  // 复制按钮实现内容复制
  const copyInput = async () => {
    try {
      await navigator.clipboard.writeText(input.value)
      ElMessage.success('输入数据复制成功')
    } catch(err) {
      // console.error('复制失败', err)
      ElMessage.success('输入数据复制失败')
    }
  }
  const copyOutput = async () => {
    try{
      await navigator.clipboard.writeText(output.value)
      ElMessage.success('输出数据复制成功')
    } catch(err) {
      ElMessage.success('输出数据复制成功')
    }
  }
</script>

<template>
 <div>
      <br>
      <div class="card">
        <div
          style="
            width: 100%;
            height: 180px;
            background-color: rgb(250, 250, 250);
          "
        >
          <div class="card">
          <el-text style="text-align: center;">
              <span style="color:black">example: {{testExampleNum }} </span> 
          </el-text>
          </div>
          <el-row>
            <el-col :span="11">
              <el-row>
                <el-col :span="16">
                  <div class="card">
                    <el-text> Input </el-text>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="card">
                    <el-button round size="small" @click="copyInput"> Copy </el-button>
                  </div>
                </el-col>
              </el-row>
              <el-input
                v-model="input"
                style="width: 100%; padding: 10px"
                :rows="5"
                type="textarea"
                clearable
              />
            </el-col>
            <el-col :span="11">
              <el-row>
                <el-col :span="16">
                  <div class="card">
                    <el-text> Output </el-text>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="card">
                    <el-button round size="small" @click="copyOutput"> Copy </el-button>
                  </div>
                </el-col>
              </el-row>
              <el-input
                v-model="output"
                style="width: 100%; padding: 10px"
                :rows="5"
                type="textarea"
                clearable
              />
            </el-col>
            <el-col :span="2">
                <div style="padding-top:50px">
                  <div>
                    <el-button type="success" 
                    @click="sampleUp"
                      ><el-icon><Top /></el-icon
                    ></el-button>
                  </div>
                  <div>
                    <el-button type="danger" @click="sampleDelete" >del</el-button>
                  </div>
                  <div>
                    <el-button type="warning"
                    @click="sampleDown"
                      ><el-icon><Bottom /></el-icon
                    ></el-button>
                  </div>

                </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>
<style>
</style>