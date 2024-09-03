<template>
  <div>
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text class="first-text"> Add Contest </el-text>
    </div>
    <!-- 比赛编号 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Contest Num: </el-text>
      </div>
      <div class="card">
        <el-input v-model="contestNum" style="width: 300px" placeholder="" clearable />
      </div>
    </div>
    <!-- 比赛题目 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Contest Title: </el-text>
      </div>
      <div class="card">
        <el-input v-model="contestTitle" style="width: 300px" placeholder="" clearable />
      </div>
    </div>

    <!-- 比赛日期 -->
    <div>
      <div class="card">
        <el-text class="second-text"> Contest Time: </el-text>
      </div>

      <div class="block" style="padding-left: 20px; padding-top: 20px">
        <div class="block">
          <el-date-picker v-model="contestTime" type="datetimerange" start-placeholder="Start date"
            end-placeholder="End date" format="YYYY-MM-DD HH:mm:ss" date-format="YYYY/MM/DD ddd"
            time-format="A hh:mm:ss" />
        </div>
      </div>
    </div>

    <!-- 比赛类型设置 -->
    <div class="card">
      <el-text class="second-text">Awarding strategy: </el-text>
      <el-radio-group v-model="awardingStrategy">
        <el-radio :value="0">amount</el-radio>
        <el-radio :value="1">radio</el-radio>
      </el-radio-group>
    </div>

    <!-- 奖牌数量设置 -->
    <div class="card" v-show="awardingStrategy === 0">
      <el-text class="second-text"> Medal Count Assign: </el-text>

      <el-text class="second-text;third-text" style="padding-left: 20px ; padding-right: 10px; color: black;">Gold:
      </el-text>
      <el-input v-model="goldCount" style="width: 100px" placeholder="" clearable />
      <el-text class="second-text;third-text" style="padding-left: 20px ; padding-right: 10px; color: black;"> Silver:
      </el-text>
      <el-input v-model="silverCount" style="width: 100px" placeholder="" clearable />
      <el-text class="second-text;third-text" style="padding-left: 20px ; padding-right: 10px; color: black;"> Bronze:
      </el-text>
      <el-input v-model="bronzeCount" style="width: 100px" placeholder="" clearable />
    </div>

    <!-- 奖牌率设置 -->
    <div class="card" v-show="awardingStrategy === 1">
      <el-text class="second-text"> Medal Radio Setting: </el-text>
      <el-text class="second-text;third-text" style="padding-left: 20px ; padding-right: 10px; color: black;">Gold:
      </el-text>
      <el-input v-model="goldRadio" style="width: 100px" placeholder="" clearable />
      <el-text class="second-text;third-text" style="padding-left: 20px ; padding-right: 10px; color: black;"> Silver:
      </el-text>
      <el-input v-model="silverRadio" style="width: 100px" placeholder="" clearable />
      <el-text class="second-text;third-text" style="padding-left: 20px ; padding-right: 10px; color: black;"> Bronze:
      </el-text>
      <el-input v-model="bronzeRadio" style="width: 100px" placeholder="" clearable />
    </div>

    <!-- 封榜时间设置 -->
    <div class="card">
      <el-text class="second-text"> Frozen Setting: </el-text>

      <el-text class="second-text;third-text" style="padding-left: 20px ; padding-right: 10px; color: black;">Before
        End(mins): </el-text>
      <el-input v-model="frozenTimesBeforeEnd" style="width: 100px" placeholder="" clearable />
      <el-text class="second-text;third-text" style="padding-left: 20px ; padding-right: 10px; color: black;"> After
        End(mins): </el-text>
      <el-input v-model="frozenTimesAfterEnd" style="width: 100px" placeholder="" clearable />
    </div>

    <!-- 比赛类型设置 -->
    <div class="card">
      <el-text class="second-text"> Contest Type: </el-text>
      <el-radio-group v-model="contestType">
        <el-radio :value="0">Public</el-radio>
        <el-radio :value="1">Private</el-radio>
        <el-radio :value="2">Protected</el-radio>
      </el-radio-group>
    </div>
    <!-- 如果contest 为保护状态设置密码 -->
    <div class="card" v-show="contestType === 2">
      <el-text class="second-text" style="">
        Contest Password:
      </el-text>
      <el-input v-model="contestPassword" style="width: 240px" placeholder="" clearable />
    </div>
    <!-- 比赛语言设置 -->
    <div class="card">
      <el-text class="second-text"> Language: </el-text>
      <el-select v-model="languageSelected" multiple clearable collapse-tags placeholder="Select"
        popper-class="custom-header" style="width: 200px">
        <el-option v-for="item in languageOptions" :key="item.value" :label="item.key" :value="item.value" />
      </el-select>
    </div>

    <!-- 录题 -->
    <div class="card">
      <div>
        <el-text class="second-text"> Problem Set: </el-text>
      </div>
      <div style="padding-top: 10px">
        <el-table :data="selectedProblems" border>
          <!-- 对题目编号进行颜色处理 -->
          <el-table-column label="#" width="50px">
            <template #default="scope">
              <el-text class="third-text">{{ numberToLetter(scope.$index) }}</el-text>
            </template>
          </el-table-column>
          <el-table-column label="OJ" width="150px">
            <template #default="scope">
              <el-input v-model="scope.row.resourcesOj" />
            </template>
          </el-table-column>
          <el-table-column label="ProbNum" width="150px">
            <template #default="scope">
              <el-input v-model="scope.row.problemNum" />
            </template>
          </el-table-column>
          <el-table-column label="address" width="150px">
            <template #default="scope">
              <el-input v-model="scope.row.problemAddress" />
            </template>
          </el-table-column>
          <el-table-column label="ProblemTitle in OJ">
            <template #default="scope">
              <el-input v-model="scope.row.problemTitleInOJ" />
            </template>
          </el-table-column>
          <el-table-column label="ProblemTitle in contest">
            <template #default="scope">
              <el-input v-model="scope.row.problemTitleInContest" />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template #default="scope">
              <el-button @click="moveUp(scope.$index)" size="mini"><el-icon>
                  <ArrowUpBold />
                </el-icon></el-button>
              <el-button @click="moveDown(scope.$index)" size="mini"><el-icon>
                  <ArrowDownBold />
                </el-icon></el-button>
              <el-button @click="removeRow(scope.$index)" size="mini" type="danger"><el-icon>
                  <CloseBold />
                </el-icon></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button @click="addRow" type="primary" style="margin-top: 10px">新增题目</el-button>
      </div>
    </div>

    <div class="card">
      <div>
        <el-text class="second-text">
          Description:
        </el-text>
      </div>
      <div style="padding-top: 10px">
        <MdEditor ref="contestDescriptionEditor" name="Contest description" id="contestDescription"></MdEditor>
      </div>
    </div>
  </div>
  <div class="card">
    <el-button type="primary" @click="contestAddEventHandler">Add</el-button>
  </div>

  <div style="height: 40px"></div>
</template>

<script lang="ts" setup>
import MdEditor from "@/components/MdEditor.vue";
import { ref } from "vue";
import {createContestService} from "@/api/contest.js"
import {numberToLetter} from '@/utils/transferUtils.js'
import { describe } from "node:test";


const contestNum = ref(1001)

const contestTitle = ref('test');
const contestTime = ref([])

const awardingStrategy = ref(0)

const goldCount = ref(5);
const silverCount = ref(10);
const bronzeCount = ref(15);

const goldRadio = ref(10);
const silverRadio = ref(20);
const bronzeRadio = ref(30);



const frozenTimesBeforeEnd = ref(60);
const frozenTimesAfterEnd = ref(0);

const contestType = ref(1);
const contestPassword = ref("gzhuacm");


const languageSelected = ref([0, 1, 2, 3, 4]);
const languageOptions = [
  { key: "C", value: 0 },
  { key: "C++", value: 1 },
  { key: "Java", value: 2 },
  { key: "Python3", value: 3 },
  { key: "Go", value: 4 },
];

const selectedProblems = ref([
  { resourcesOj: "", problemNum: "", problemAddress: "", problemTitleInOJ: "", problemTitleInContest: "" },
]);

const contestDescriptionEditor = ref()
const contestDescription = ref()
const contestDescriptionHtml = ref()

const addRow = () => {
  selectedProblems.value.push({
    resourcesOj: "",
    problemNum: "",
    problemAddress: "",
    problemTitleInOJ: "",
    problemTitleInContest: "",
  });
};

const removeRow = (index) => {
  if (selectedProblems.value.length > 1) {
    selectedProblems.value.splice(index, 1);
  } else {
    ElMessage.error("至少要保留一行");
  }
};

const moveUp = (index) => {
  if (index > 0) {
    const temp = selectedProblems.value[index];
    selectedProblems.value[index] = selectedProblems.value[index - 1];
    selectedProblems.value[index - 1] = temp;
  } else {
    ElMessage.error("已经是第一行，无法上移");
  }
};

const moveDown = (index) => {
  if (index < selectedProblems.value.length - 1) {
    const temp = selectedProblems.value[index];
    selectedProblems.value[index] = selectedProblems.value[index + 1];
    selectedProblems.value[index + 1] = temp;
  } else {
    ElMessage.error("已经是最后一行，无法下移");
  }
};

const contestAddEventHandler = async () => {
  console.log(contestTime.value);
  contestDescription.value = contestDescriptionEditor.value.getContent()
  contestDescriptionHtml.value = contestDescriptionEditor.value.getHTML()
  await createContestService({
    contestNum: contestNum.value,
    contestTitle: contestTitle.value,
    contestType: contestType.value,
    contestPassword: contestPassword.value,
    contestTime: contestTime.value,
    goldRadio: goldRadio.value,
    silverRadio: silverRadio.value,
    bronzeRadio: bronzeRadio.value,
    goldCount: goldCount.value,
    silverCount: silverCount.value,
    bronzeCount: bronzeCount.value,
    frozenTimesBeforeEnd: frozenTimesBeforeEnd.value,
    frozenTimesAfterEnd: frozenTimesAfterEnd.value,
    languageSelected: languageSelected.value,
    description: contestDescription.value,
    descriptionHtml: contestDescriptionHtml.value,
    selectedProblems: selectedProblems.value
  })
}

</script>

<style scoped>
.card {
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
}

/* 一级文本 */
.first-text {
  font-size: 30px;
  color: black;
  font-weight: bold;
}

/* 二级文本 */
.second-text {
  font-size: 17px;
  color: black;
}

.third-text {
  font-size: 15px;
  color: black;
}

.va-table-responsive {
  overflow: auto;
}

.example-basic .el-date-editor {
  margin: 8px;
}

.el-table {
  width: 100%;
}
</style>