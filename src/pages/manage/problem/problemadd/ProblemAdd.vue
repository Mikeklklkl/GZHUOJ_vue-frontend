<script setup>
  import {ref, onMounted} from 'vue'
  import MdEditor from '@/components/MdEditor.vue'
  import MdView from '@/components/MdView.vue'
  import sampleCard from '@/components/problem/sampleCard.vue'
  import {createProblem} from '@/api/problemManager.js'

  // 定义每一个组件绑定的实例
  const descriptionEditor = ref(null)
  const inputDescriptionEditor = ref(null)
  const outputDescriptionEditor = ref(null)
  const explanationEditor = ref(null)

  const problemTitle = ref(' ')
  const problemNum = ref('')
  const timeLimit = ref(1)
  const memoryLimit = ref(1)
  // 存储题面
  const description = ref('')
  const descriptionHtml = ref('')
  const inputDescription = ref('')
  const inputDescriptionHtml = ref('')
  const outputDescription = ref('')
  const outputDescriptionHtml = ref('')
  const explanation = ref('')
  const explanationHtml = ref('')

// MdView 组件测试
//   const textHtml = ref(`<div class="language-math">f_1 = 1</div>
// <pre><code class="language-cpp">#include&lt;iostream&gt;
// using namespace std;

// signed main() {
//     ios::sync_with_stdio(false);
//     cin.tie(0),cout.tie(0);
//     int t = 1;
//     while(t--){solve(t);}
// }
// </code></pre>
// `)
  

  /*
    {
      testExampleNum: 索引 + 1,
      input: '',
      output: ''
    }
  */
  
  const testExampleList = ref([{
      testExampleNum: 1,
      input: '111',
      output: '111'
    },{
      testExampleNum: 2,
      input: '111',
      output: '111'
    }
    

  ])
  const author = ref('')
  // 0 common judge, 1 special judge
  const problemType = ref(0)

  // 添加题目响应函数
  const clickAddProblem = async () => {

    console.log(descriptionEditor.value.getContent())
    // 获取内容
    description.value = descriptionEditor.value.getContent();
    descriptionHtml.value = descriptionEditor.value.getHTML();
    inputDescription.value = inputDescriptionEditor.value.getContent();
    inputDescriptionHtml.value = inputDescriptionEditor.value.getHTML();
    outputDescription.value = outputDescriptionEditor.value.getContent();
    outputDescriptionHtml.value = outputDescriptionEditor.value.getHTML();
    explanation.value = explanationEditor.value.getContent();
    explanationHtml.value = explanationEditor.value.getHTML();

    // 发送请求
    // 获取sampleCard组件的内容处理逻辑。
    
    const res = createProblem({
      problemTitle: problemTitle.value,
      problemNum: problemNum.value,
      timeLimit: timeLimit.value,
      memoryLimit: memoryLimit.value,
      description: description.value,
      descriptionHtml: descriptionHtml.value,
      inputDescription: inputDescription.value,
      inputDescriptionHtml: inputDescriptionHtml.value,
      outputDescription: outputDescription.value,
      outputDescriptionHtml: outputDescriptionHtml.value,
      testExampleList: testExampleList.value,
      author: author.value,
      problemType: problemType.value,
      explanation: explanation.value,
      explanationHtml: explanationHtml.value
    })


  }


  // 样例处理逻辑
  const exampleAdd = () => {
    // 增加的样例
    var id = testExampleList.value.length + 1;
    testExampleList.value.push({
      testExampleNum: id, 
      input: ' ',
      output: ' '
    })
  }
  const sampleDelete = (id) => {
    // 根据id删除样例：
    for(var i = id; i < testExampleList.value.length; ++i){
      testExampleList.value[i].testExampleNum --;
    }

    
    for(var i = 0; i < testExampleList.value.length; ++i){
      console.log(i , " testExampleNum " , testExampleList.value[i].testExampleNum)
    }
    testExampleList.value.splice(id - 1, 1)
  }
  const sampleUp = (id) => {
    // 样例向上移动
    id--;
    if(id != 0){
      console.log(id)
      console.log(testExampleList.value[id])
      var tInput = testExampleList.value[id].input
      var tOuput = testExampleList.value[id].output
      testExampleList.value[id].input = testExampleList.value[id - 1].input
      testExampleList.value[id].output = testExampleList.value[id - 1].output
      testExampleList.value[id - 1].input = tInput
      testExampleList.value[id - 1].output = tOuput 
    }
  }
  const sampleDown = (id) => {
    id--
    // 样例向下移动
    if(id !== testExampleList.value.length - 1){
      var tInput = testExampleList.value[id].input
      var tOuput = testExampleList.value[id].output
      testExampleList.value[id].input = testExampleList.value[id + 1].input
      testExampleList.value[id].output = testExampleList.value[id + 1].output
      testExampleList.value[id + 1].input = tInput
      testExampleList.value[id + 1].output = tOuput 
    }
  }

</script>

<template>
  <div style="background-color: rgb(100,100,100)">

    <el-card padding>
    <!-- MdView 组件测试 -->
    <!-- <MdView :htmlValue="textHtml"></MdView> -->
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text class="first-text"> Add Problem </el-text>
    </div>
    <!--题目名字-->
    <div>
      <div class="card">
        <el-text class="second-text"> Problem Title </el-text>
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
    <!-- 题目在题库中的序号 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Problem Num </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="problemNum"
          style="width: 15%"
          placeholder=""
          clearable
        />
      </div>
    </div>
    <!-- 时间限制 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Time Limits(S) </el-text>
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
        <el-text class="second-text"> Memory Limit(MB) </el-text>
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
        <el-text class="second-text"> Description</el-text>
      </div>
      <div class="card">
        <MdEditor ref="descriptionEditor"  name="problem content description" id="1"></MdEditor>
      </div>
    </div>
    <!-- 输入描述 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Input Description </el-text>
      </div>
      <div class="card">
        <MdEditor ref="inputDescriptionEditor"  name="input description" id="2"></MdEditor>
    </div>

    </div>
    <!-- 输出描述 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Output Description</el-text>
      </div>
      <div class="card">
        <MdEditor ref="outputDescriptionEditor" name="output description" id="3"></MdEditor>
      </div>
    </div>
    <!-- 样例添加 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Example</el-text>
        <span style="display: inline-block; width: 30px;"></span> <!-- 添加间距 -->
        <el-button type="primary" @click="exampleAdd">Add Example</el-button>
      </div>
    </div>
    <!-- 样例详情 -->
    <div>
      <div v-for="(item) in testExampleList" :key =item.testExampleNum>
        <div class="card">
        <!-- 样例 -->
          <sample-card 
            v-model:input = "item.input"
            v-model:output = "item.output"
            v-model:testExampleNum = "item.testExampleNum"
            @sampleDelete="sampleDelete"
            @sampleUp="sampleUp"
            @sampleDown="sampleDown"
          ></sample-card>
        </div>
    </div>

    <!-- 样例说明 -->
    <div>
      <div class="card">
        <el-text class="second-text">NOTE </el-text>
      </div>
      <div class="card">
        <MdEditor ref="explanationEditor"  name="problem content explanation" id="explanation"></MdEditor>
      </div>
    </div>

    </div>
    <!-- 作者 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Author </el-text>
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
        <el-radio-group v-model="problemType">
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

<style scoped>
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

/* 一级文本 */
.first-text {
  font-size: 30px
}

/* 二级文本 */
.second-text {
  font-size: 20px
}

</style>