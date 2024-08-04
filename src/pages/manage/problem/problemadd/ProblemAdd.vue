<script setup>
  import {ref, onMounted} from 'vue'
  import MdEditor from '@/components/MdEditor.vue'
  const problemTitle = ref(' ')
  const timeLimit = ref(1)
  const memoryLimit = ref(1)
  const description = ref('zzzz')
  const inputDescription = ref('zzzzzzz')
  const outputDescription = ref('zzzzz')
  const samples = ref( [
    {
      id: 0,
      input: '',
      output: ''
    }
  ])
  const author = ref('')
  // 0 common judge, 1 special judge
  const judgeType = ref(0)

  // 定义每一个组件绑定的实例
  const descriptionEditor = ref(null)
  const inputDescriptionEditor = ref(null)
  const outputDescriptionEditor = ref(null)

  const clickAddProblem = () => {
    descriptionEditor.value.setValue("自律旭明，一天十个接口！！！！");
    console.log(descriptionEditor.value.getContent())
  }
  
</script>

<template>
  <div style="background-color: rgb(100,100,100)">

    <el-card padding>
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text style="font-size: 25px"> Add Problem </el-text>
    </div>
    <!--下面的文本都还没进行数据绑定，需要ref('')来定义变量-->
    <div>
      <div class="card">
        <el-text> Problem Title: </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="problemTitle"
          style="width: 25%"
          placeholder=""
          clearable
        />
      </div>
    </div>
    <!-- 时间限制 -->
    <div>
      <div class="card">
        <el-text> Time Limits(S): </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="timeLimit"
          style="width: 15%"
          placeholder="2"
          clearable
        />
      </div>
    </div>
    <!-- 空间限制 -->
    <div>
      <div class="card">
        <el-text> Memory Limit(MB): </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="memoryLimit"
          style="width: 15%"
          placeholder="512"
          clearable
        />
      </div>
    </div>
    <!-- 题目描述 -->
    <div>
      <div class="card">
        <el-text> Description:</el-text>
      </div>
      <div class="card">
        <MdEditor ref="descriptionEditor" v-model="description" name="problem content description" id="1"></MdEditor>
      </div>
    </div>
    <!-- 输入描述 -->
    <div>
      <div class="card">
        <el-text> Input Description: </el-text>
      </div>
      <div class="card">
        <MdEditor ref="inputDescriptionEditor" v-model="inputDescription" name="input description" id="2"></MdEditor>
    </div>

    </div>
    <!-- 输出描述 -->
    <div>
      <div class="card">
        <el-text> Output Description: </el-text>
      </div>
      <div class="card">
        <MdEditor ref="outputDescriptionEditor" v-model="outputDescription" name="output description" id="3"></MdEditor>
      </div>
    </div>
    <!-- 样例 -->
    <div>
      <div class="card">
        <el-text> Samples: </el-text>
        <el-button type="primary" style="width: 30px"
          ><el-icon><Plus /></el-icon
        ></el-button>
      </div>
      <div class="card">
        <div
          style="
            width: 100%;
            height: 180px;
            background-color: rgb(250, 250, 250);
          "
        >
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
                    <el-button round size="small"> Copy </el-button>
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
                    <el-button round size="small"> Copy </el-button>
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
            <el-col :span="2">

                <div style="padding-top:50px">

                  <div>
                    <el-button type="success" 
                      ><el-icon><Top /></el-icon
                    ></el-button>
                  </div>
                  <div>
                    <el-button type="danger" >del</el-button>
                  </div>
                  <div>
                    <el-button type="warning"
                      ><el-icon><Bottom /></el-icon
                    ></el-button>
                  </div>

                </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 作者 -->
    <div>
      <div class="card">
        <el-text> Author: </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="author"
          style="width: 20%"
          placeholder="Author..."
          clearable
        />
      </div>
    </div>
    <!-- 题目类型选择 -->
    <div>
      <div class="my-2 ml-4">
        <el-radio-group v-model="judgeType">
          <el-radio value="1">common judge</el-radio>
          <el-radio value="2">special judge</el-radio>
        </el-radio-group>
      </div>
      <div class="card" style="padding-bottom: 50px">
        <el-button type="primary" @click="clickAddProblem">Add Problem</el-button>
    </div>
    </div>
    </el-card>
  </div>
</template>

<style>
.card {
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
}
.button-container {  
  display: flex;  
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
}
</style>