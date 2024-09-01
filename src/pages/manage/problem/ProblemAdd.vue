<script setup>
import { ref, onMounted } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import sampleCard from "@/components/problem/sampleCard.vue";
import { createProblem, testCaseUploadService } from "@/api/problem.js";
import JSZip from "jszip";
import { saveAs } from 'file-saver';

// 定义每一个组件绑定的实例
const descriptionEditor = ref(null);
const inputDescriptionEditor = ref(null);
const outputDescriptionEditor = ref(null);
const explanationEditor = ref(null);

const problemTitle = ref(" ");
const problemNum = ref("");
const timeLimit = ref(1);
const memoryLimit = ref(1);
// 存储题面
const description = ref("");
const descriptionHtml = ref("");
const inputDescription = ref("");
const inputDescriptionHtml = ref("");
const outputDescription = ref("");
const outputDescriptionHtml = ref("");
const explanation = ref("");
const explanationHtml = ref("");

const testExampleList = ref([
  {
    testExampleNum: 1,
    input: "111",
    output: "111",
  },
  {
    testExampleNum: 2,
    input: "111",
    output: "111",
  },
]);

// 数据集合相关
// 1. 数据
const zipFile = ref();
const zipFileName = ref("");
// 最后的文件 数据
const files = ref([]);

// 2. 工具
const zipUtil = new JSZip();

// 绑定组件
const fileInput = ref(null);

const author = ref("");
// 0 common judge, 1 special judge
const problemType = ref(0);

// 添加题目响应函数
const clickAddProblem = async () => {
  console.log(descriptionEditor.value.getContent());
  // 获取内容
  description.value = descriptionEditor.value.getContent();
  descriptionHtml.value = descriptionEditor.value.getHTML();
  inputDescription.value = inputDescriptionEditor.value.getContent();
  inputDescriptionHtml.value = inputDescriptionEditor.value.getHTML();
  outputDescription.value = outputDescriptionEditor.value.getContent();
  outputDescriptionHtml.value = outputDescriptionEditor.value.getHTML();
  explanation.value = explanationEditor.value.getContent();
  explanationHtml.value = explanationEditor.value.getHTML();

  console.log(descriptionHtml.value);
  // 发送请求
  // 获取sampleCard组件的内容处理逻辑。

  await createProblem({
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
    explanationHtml: explanationHtml.value,
  });

  await testCaseUploadService({
    problemNum: problemNum.value,
    testCase: zipFile.value,
  });
};

// 样例处理逻辑
const exampleAdd = () => {
  // 增加的样例
  var id = testExampleList.value.length + 1;
  testExampleList.value.push({
    testExampleNum: id,
    input: " ",
    output: " ",
  });
};
const sampleDelete = (id) => {
  // 根据id删除样例：
  for (var i = id; i < testExampleList.value.length; ++i) {
    testExampleList.value[i].testExampleNum--;
  }

  for (var i = 0; i < testExampleList.value.length; ++i) {
    console.log(i, " testExampleNum ", testExampleList.value[i].testExampleNum);
  }
  testExampleList.value.splice(id - 1, 1);
};
const sampleUp = (id) => {
  // 样例向上移动
  id--;
  if (id != 0) {
    console.log(id);
    console.log(testExampleList.value[id]);
    var tInput = testExampleList.value[id].input;
    var tOuput = testExampleList.value[id].output;
    testExampleList.value[id].input = testExampleList.value[id - 1].input;
    testExampleList.value[id].output = testExampleList.value[id - 1].output;
    testExampleList.value[id - 1].input = tInput;
    testExampleList.value[id - 1].output = tOuput;
  }
};
const sampleDown = (id) => {
  id--;
  // 样例向下移动
  if (id !== testExampleList.value.length - 1) {
    var tInput = testExampleList.value[id].input;
    var tOuput = testExampleList.value[id].output;
    testExampleList.value[id].input = testExampleList.value[id + 1].input;
    testExampleList.value[id].output = testExampleList.value[id + 1].output;
    testExampleList.value[id + 1].input = tInput;
    testExampleList.value[id + 1].output = tOuput;
  }
};
// 调用文件上传事件
const triggerFileUpload = () => {
  fileInput.value.click();
};
// 处理文件时上传逻辑
const handleFileUpload = async (event) => {
  const fileSelected = event.target.files[0];
  zipFile.value = fileSelected;
  // this.$refs.fileInput.value = "";
  console.log(fileSelected);
  // 传入文件为空
  if (fileSelected === null) {
    ElMessage({
      message: "请传入zip类型的文件",
      type: "error",
    });
  } else {
    // 1. 特判是否为zip
    const fileSelectedType = fileSelected.type;
    const fileSelectedName = fileSelected.name;
    const fileSelectedExtension = fileSelectedName
      .split(".")
      .pop()
      .toLowerCase();
    console.log("type", fileSelectedType);
    console.log("Extension", fileSelectedExtension);
    // 检查是否为zip文件
    if (
      fileSelectedType === "application/zip" ||
      fileSelectedType === "application/x-zip-compressed" ||
      fileSelectedExtension === "zip"
    ) {
      // 解压，并且列表渲染。
      unzipFile(fileSelected);
    } else {
      ElMessage({
        message: "所选文件不合法",
        type: "error",
      });
    }
  }
};

// 解压文件
const unzipFile = async (fileSelected) => {
  try {
    const content = await zipUtil.loadAsync(fileSelected);
    // 遍历, 判断合法性
    for (const fileName in content.files) {
      // 保证了属性源自于文件

      const fileData = content.files[fileName];
      // 当前对象是文件夹，或者不合法命名文件则直接抛出。
      if (fileData.dir || !isValidName(fileName)) {
        ElMessage({
          message: "压缩包格式不合法",
          type: "error",
        });
        throw new Error("压缩包格式不合法");
      }
      const fileContent = await fileData.async("string");
      // 存入数组方便渲染。
      files.value.push({
        name: fileName,
        size: fileData._data.uncompressedSize,
        content: fileContent,
      });
    }
    // 处理files 数组： 将其根据以下规则排序：
    // 1.in 1.out
    // 2.in 2.out
    // 3.in 3.out
    // 4.in 4.out
    files.value = sortFiles(files.value);
    structIsValid(files.value);
    console.log(files.value);
  } catch (error) {
    clearFiles();
    ElMessage({
      message: error.message,
      type: "error",
    });
  }
};

// 判断名称是否合法
const isValidName = (fileName) => {
  // 数字 + in , out
  const arr = fileName.split(".");
  // 1. 1个小数点
  const flag1 = arr.length === 2;
  // 2. 前缀是有效数字
  const flag2 = isFinite(arr[0]);
  // 3. 后缀是in  或者 out
  const flag3 = arr[1] === "in" || arr[1] === "out";
  return flag1 && flag2 && flag3;
};

// 判断是否递增， 是否一一匹配
const structIsValid = (files) => {
  if (files.length % 2 === 1) {
    throw new Error("测试点： in,out没有一一对应");
  }
  // 文件前缀数字 不是从 1开始
  if (files.length > 1) {
    const arr = files[0].name.split(".");
    if (Number(arr[0]) !== 1) {
      throw new Error("测试点: 数据前缀没有从1开始");
    }
  }
  for (var i = 1; i < files.length; i += 2) {
    const arr1 = files[i - 1].name.split(".");
    const arr2 = files[i].name.split(".");
    if (arr1[1] !== "in" && arr2[1] !== "out" && arr1[0] !== arr2[0]) {
      throw new Error("测试点: in,out没有一一对应");
    }
    // 递增
    if (i + 1 < files.length) {
      const arr3 = files[i + 1].name.split(".");
      if (Number(arr2[0]) + 1 !== Number(arr3[0])) {
        throw new Error("测试点: 没有按顺序递增");
      }
    }
  }
};

// 清空文件
const clearFiles = () => {
  files.value = [];
  zipFile.value = null;
  zipFileName.value = "";
  fileInput.value.value = "";
};
// 文件下载到本地
const uploadFile = async () => {
  
  // 触发下载
  saveAs(zipFile.value, 'data.zip');
};

// files 排序渲染展示
const sortFiles = (files) => {
  return files.sort((a, b) => {
    const [aNum, aType] = a.name.split(".");
    const [bNum, bType] = b.name.split(".");

    if (aNum === bNum) {
      return aType === "in" ? -1 : 1;
    }
    return parseInt(aNum) - parseInt(bNum);
  });
};
</script>

<template>
  <div style="background-color: rgb(100, 100, 100)">
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
          <el-input v-model="problemTitle" style="width: 25%" placeholder="" clearable />
        </div>
      </div>
      <!-- 题目在题库中的序号 -->
      <div>
        <div class="card">
          <el-text class="second-text"> Problem Num </el-text>
        </div>
        <div class="card">
          <el-input v-model="problemNum" style="width: 15%" placeholder="" clearable />
        </div>
      </div>
      <!-- 时间限制 -->
      <div>
        <div class="card">
          <el-text class="second-text"> Time Limits(S) </el-text>
        </div>
        <div class="card">
          <el-input v-model="timeLimit" style="width: 15%" placeholder="2" clearable />
        </div>
      </div>
      <!-- 空间限制 -->
      <div>
        <div class="card">
          <el-text class="second-text"> Memory Limit(MB) </el-text>
        </div>
        <div class="card">
          <el-input v-model="memoryLimit" style="width: 15%" placeholder="512" clearable />
        </div>
      </div>
      <!-- 题目描述 -->
      <div>
        <div class="card">
          <el-text class="second-text"> Description</el-text>
        </div>
        <div class="card">
          <MdEditor ref="descriptionEditor" name="problem content description" id="1"></MdEditor>
        </div>
      </div>
      <!-- 输入描述 -->
      <div>
        <div class="card">
          <el-text class="second-text"> Input Description </el-text>
        </div>
        <div class="card">
          <MdEditor ref="inputDescriptionEditor" name="input description" id="2"></MdEditor>
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
          <span style="display: inline-block; width: 30px"></span>
          <!-- 添加间距 -->
          <el-button type="primary" @click="exampleAdd">Add Example</el-button>
        </div>
      </div>
      <!-- 样例详情 -->
      <div>
        <div v-for="item in testExampleList" :key="item.testExampleNum">
          <div class="card">
            <!-- 样例 -->
            <sample-card v-model:input="item.input" v-model:output="item.output"
              v-model:testExampleNum="item.testExampleNum" @sampleDelete="sampleDelete" @sampleUp="sampleUp"
              @sampleDown="sampleDown"></sample-card>
          </div>
        </div>

        <!-- 样例说明 -->
        <div>
          <div class="card">
            <el-text class="second-text">NOTE </el-text>
          </div>
          <div class="card">
            <MdEditor ref="explanationEditor" name="problem content explanation" id="explanation"></MdEditor>
          </div>
        </div>
      </div>
      <div>
        <!-- 数据上传 -->
        <div>
          <div class="card">
            <el-text class="second-text"> Test Data Import</el-text>
            <span style="display: inline-block; width: 30px"></span>
            <!-- 添加间距 -->
            <!-- <el-button type="primary" @click="exampleAdd">Add Example</el-button> -->
            <br />
            <br />
            <!-- 上传操作按钮 -->
            <div>
              <el-button color="#626aef" :dark="false" @click="triggerFileUpload">import</el-button>
              <el-button color="#626aef" :dark="false" plain @click="clearFiles">clear</el-button>
              <el-button color="#626aef" :dark="false" @click="uploadFile">download</el-button>
              <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />
            </div>
            <!-- 上传结果展示视图 -->

            <el-table :data="files" stripe style="width: 60%">
              <el-table-column prop="name" label="fileName" width="130" />
              <el-table-column prop="size" label="size" width="130" />
              <el-table-column prop="content" label="content" />
            </el-table>

            <!-- 文件上传，上传一个压缩包，自动解压，并且列表展示里边的数据集。 同时用户可以下载，在线预览两个功能-->
          </div>
        </div>
      </div>
      <!-- 作者 -->
      <div>
        <div class="card">
          <el-text class="second-text"> Author </el-text>
        </div>
        <div class="card">
          <el-input v-model="author" style="width: 20%" placeholder="Author..." clearable />
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
  font-size: 30px;
}

/* 二级文本 */
.second-text {
  font-size: 20px;
}

.va-table-responsive {
  overflow: auto;
}
</style>
