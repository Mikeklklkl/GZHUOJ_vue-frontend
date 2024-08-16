<template>

   <div style="padding-top:40px;padding-left:20px;">
    <TopNavFour/>
  </div>

  <div style="padding: 20px">
    <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="problems" label="Problems" width="100">
        <template v-slot="scope">
          <div @dblclick="goToSubmit(scope.row.id)">
            {{ scope.row.id }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="700" />
      <el-table-column prop="commitnum" label="CommitNumber" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import TopNavFour from "../../components/TopNavFour.vue";

const router = useRouter();

interface User {
  problems: string;
  name: string;
  commitnum: string;
  commit: string;
  id: string;
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (row.commit === "1") {
    return "success-row";
  } else if (row.commit === "2") {
    return "warning-row";
  }
  // 如果commit不是1也不是2，或者未定义，则不返回特殊类名
  return "";
};

const tableData: User[] = [
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
    id: "1000",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
    id: "1000",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
    id: "1000",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
    id: "1000",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
    id: "1000",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
    id: "1000",
  },
];

const goToSubmit = (id: string) => {
  // 使用router.push来导航到/detail路由，并传递查询参数
  router.push({
    name: "commit_submit",
    query: {
      id: id, // 这里传递的是detailId参数
    },
  });
  console.log("跳转到commit_submit");
};
</script>

<style scoped>
.warning-row {
  background-color: #f56c6c;
}
.success-row {
  background-color: #3bde9a;
}
</style>