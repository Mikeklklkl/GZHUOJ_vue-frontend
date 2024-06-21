<!--主页面内容-->
<template>
  <div class="flex flex-wrap gap-4">
    <div style="height: 250px">
      <el-row>
        <el-col :span="12">
          <el-card style="max-width: 480px" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-row>
                    <el-col :span="6">团队新闻</el-col>
                    <el-col :span="2" :offset="15">
                        <el-link type="primary">more...</el-link>
                    </el-col>
                </el-row> 
              </div>
            </template>
           <el-link v-for="o in 4" :key="o" class="text item" style="display:block;margin-bottom:13px;font-size: 20px;" type="primary">{{ 'List item ' + o }}</el-link>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card style="width: 480px" shadow="hover">
            <el-row>
                    <el-col :span="6">通知公告</el-col>
                    <el-col :span="2" :offset="15">
                        <el-link type="primary">more...</el-link>
                    </el-col>
                </el-row> 
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="12">
        <el-card style="max-width: 480px" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-row>
                    <el-col :span="6">解题报告</el-col>
                    <el-col :span="2" :offset="15">
                        <el-link type="primary">more...</el-link>
                    </el-col>
                </el-row> 
              </div>
            </template>
            
            <el-link v-for="o in 4" :key="o" class="text item" style="display:block;margin-bottom:13px;font-size: 20px;" type="primary">{{ 'List item ' + o }}</el-link>
          </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="width: 480px" shadow="hover">
            <el-row>
                    <el-col :span="6">竞赛周边</el-col>
                    <el-col :span="2" :offset="15">
                        <el-link type="primary">more...</el-link>
                    </el-col>
                </el-row> 
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
</script>