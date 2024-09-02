<template>
  <div>
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text class="first-text"> Add Contest </el-text>
    </div>
    <div>
      <div class="card">
        <el-text class="second-text"> Co-editor: </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="editor_value"
          style="width: 300px"
          placeholder=""
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text class="second-text"> Contest Title: </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="title_value"
          style="width: 300px"
          placeholder=""
          clearable
        />
      </div>
    </div>

    <div>
      <div class="card">
        <el-text class="second-text"> Contest Time: </el-text>
      </div>

      <div class="block" style="padding-left: 20px; padding-top: 20px">
        <div class="block">
          <el-date-picker
            v-model="time_value"
            type="datetimerange"
            start-placeholder="Start date"
            end-placeholder="End date"
            format="YYYY-MM-DD HH:mm:ss"
            date-format="YYYY/MM/DD ddd"
            time-format="A hh:mm:ss"
          />
        </div>
      </div>
    </div>

    <div class="card">
      <el-text class="second-text"> Award Ratio: </el-text>

      <el-text class="second-text;third-text" style="padding-left: 20px"
        >Gold
      </el-text>
      <el-input
        v-model="gold_value"
        style="width: 100px"
        placeholder=""
        clearable
      />
      <el-text class="second-text;third-text"> Silver </el-text>
      <el-input
        v-model="silver_value"
        style="width: 100px"
        placeholder=""
        clearable
      />
      <el-text class="second-text;third-text"> Bronze </el-text>
      <el-input
        v-model="bronze_value"
        style="width: 100px"
        placeholder=""
        clearable
      />
    </div>

    <div class="card">
      <el-text class="second-text"> Frozen Minutes: </el-text>

      <el-text class="second-text;third-text" style="padding-left: 20px"
        >Before End</el-text
      >
      <el-input
        v-model="gold_value"
        style="width: 100px"
        placeholder=""
        clearable
      />
      <el-text class="second-text;third-text"> After End </el-text>
      <el-input
        v-model="silver_value"
        style="width: 100px"
        placeholder=""
        clearable
      />
    </div>

    <div class="card">
      <el-text class="second-text"> Contest Type: </el-text>
      <el-radio-group v-model="type_value">
        <el-radio :value="3">Public</el-radio>
        <el-radio :value="6">Private</el-radio>
        <el-radio :value="9">Standard</el-radio>
      </el-radio-group>
      <el-text class="second-text" style="padding-left: 5px">
        Password(Only for Public):
      </el-text>
      <el-input
        v-model="password_value"
        style="width: 240px"
        placeholder=""
        clearable
      />
    </div>

    <div class="card">
      <el-text class="second-text"> Top Team Number for School Rank: </el-text>
      <el-input
        v-model="top_value"
        style="width: 240px"
        placeholder=""
        clearable
      />
    </div>

    <div class="card">
      <el-text class="second-text"> Language: </el-text>
      <el-select v-model="option_Value" placeholder="" style="width: 200px">
        <el-option
          v-for="item in language_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="card">
      <div>
        <el-text class="second-text"> Problem Set: </el-text>
      </div>
      <div style="padding-top: 10px">
        <el-table :data="tableData" border>
          <el-table-column label="OJ" width="150px">
            <template #default="scope">
              <el-input v-model="scope.row.column1" />
            </template>
          </el-table-column>
          <el-table-column label="ProbNum" width="150px">
            <template #default="scope">
              <el-input v-model="scope.row.column2" />
            </template>
          </el-table-column>
          <el-table-column label="Wgt." width="100px">
            <template #default="scope">
              <el-input v-model="scope.row.column3" />
            </template>
          </el-table-column>
          <el-table-column label="Alias" width="180px">
            <template #default="scope">
              <el-input v-model="scope.row.column4" />
            </template>
          </el-table-column>
          <el-table-column label="Tiele">
            <template #default="scope">
              <el-input v-model="scope.row.column5" />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template #default="scope">
              <el-button @click="moveUp(scope.$index)" size="mini"
                ><el-icon><ArrowUpBold /></el-icon
              ></el-button>
              <el-button @click="moveDown(scope.$index)" size="mini"
                ><el-icon><ArrowDownBold /></el-icon
              ></el-button>
              <el-button
                @click="removeRow(scope.$index)"
                size="mini"
                type="danger"
                ><el-icon><CloseBold /></el-icon
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button @click="addRow" type="primary" style="margin-top: 10px"
          >新增一行</el-button
        >
      </div>
    </div>

    <div class="card">
      <div>
        <el-text class="second-text">
          Description/Notification(markdown):
        </el-text>
      </div>
      <div style="padding-top: 10px">
         <MdEditor ref="descriptionEditor" name="problem content description" id="3"></MdEditor>
      </div>
    </div>
  </div>
  <div class="card">
    <el-button type="primary">Add</el-button>
  </div>

  <div style="height: 40px"></div>
</template>

<script lang="ts" setup>
import MdEditor from "@/components/MdEditor.vue";
import { ref } from "vue";
import { ElMessage } from "element-plus";

const time_value = ref();
const editor_value = ref();
const title_value = ref();

const gold_value = ref();
const silver_value = ref();
const bronze_value = ref();

const type_value = ref(3);

const password_value = ref();
const top_value = ref();

const region_value = ref();
const option_Value = ref();
const language_options = [
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "Java", label: "Java" },
  { value: "Python3", label: "Python3" },
  { value: "Go", label: "Go" },
];

const tableData = ref([
  { column1: "", column2: "", column3: "", column4: "", column5: "" },
]);

const addRow = () => {
  tableData.value.push({
    column1: "",
    column2: "",
    column3: "",
    column4: "",
    column5: "",
  });
};

const removeRow = (index) => {
  if (tableData.value.length > 1) {
    tableData.value.splice(index, 1);
  } else {
    ElMessage.error("至少要保留一行");
  }
};

const moveUp = (index) => {
  if (index > 0) {
    const temp = tableData.value[index];
    tableData.value[index] = tableData.value[index - 1];
    tableData.value[index - 1] = temp;
  } else {
    ElMessage.error("已经是第一行，无法上移");
  }
};

const moveDown = (index) => {
  if (index < tableData.value.length - 1) {
    const temp = tableData.value[index];
    tableData.value[index] = tableData.value[index + 1];
    tableData.value[index + 1] = temp;
  } else {
    ElMessage.error("已经是最后一行，无法下移");
  }
};
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