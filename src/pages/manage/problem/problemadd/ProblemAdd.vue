<template>
  <div style="background-color: rgb(255, 255, 255)">
    <div style="padding-top: 20px; padding-left: 20px">
      <el-text style="font-size: 25px"> Add Problem </el-text>
    </div>
    <!--下面的文本都还没进行数据绑定，需要ref('')来定义变量-->
    <div>
      <div class="card">
        <el-text> Co-editor: </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="Split with ,Like:user1,uesr2...At most 6 eo-editors"
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text> Problem Title: </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="Problem Title..."
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text> Time Limits(S): </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="1"
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text> Memory Limit(MByte): </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="128"
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text> Description(markdown): </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="Description..."
          :rows="5"
          type="textarea"
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text> Input Description (markdown): </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="Input Description:"
          :rows="5"
          type="textarea"
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text> Output Description (markdown): </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="Output Description..."
          :rows="5"
          type="textarea"
          clearable
        />
      </div>
    </div>

    <div>
      <div class="card">
        <el-text> Samples(not test data): </el-text>
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

    <div>
      <div class="card">
        <el-text>Hint (markdown):</el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="Hint:"
          :rows="5"
          type="textarea"
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text> Source (markdown): </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="Source..."
          clearable
        />
      </div>
    </div>
    <div>
      <div class="card">
        <el-text> Author: </el-text>
      </div>
      <div class="card">
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="Author..."
          clearable
        />
      </div>
    </div>
    <div>
      <div class="my-2 ml-4">
        <el-radio-group v-model="radio2">
          <el-radio value="1">Option 1</el-radio>
          <el-radio value="2">Option 2</el-radio>
        </el-radio-group>
      </div>
      <div class="card" style="padding-bottom: 50px">
        <el-button type="primary">Add Problem</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

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