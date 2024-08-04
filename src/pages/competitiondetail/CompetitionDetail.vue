<template>
  <div style="padding: 20px">
    <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="problems" label="Problems" width="100" />
      <el-table-column prop="name" label="Name" width="700" />
      <el-table-column prop="commitnum" label="CommitNumber" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
interface User {
  problems: string;
  name: string;
  commitnum: string;
  commit: string;
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
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
  },
  {
    problems: "A",
    name: "Cool, It's Yesterday Four Times More",
    commitnum: "500",
    commit: "1",
  },
];
</script>

<style scoped>
.warning-row {
  background-color: #f56c6c;
}
.success-row {
  background-color: #3bde9a;
}
</style>