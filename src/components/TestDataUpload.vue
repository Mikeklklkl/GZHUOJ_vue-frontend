<template>
    <div>
        <el-button color="#626aef" :dark="false" @click="triggerFileUpload">import</el-button>
        <el-button color="#626aef" :dark="false" plain @click="clearFiles">clear</el-button>
        <el-button color="#626aef" :dark="false">download</el-button>
        <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />
    </div>
</template>

<script setup>

const file = ref()

const triggerFileUpload = () => {
    this.$refs.fileInput.click();
}
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // 传入文件为空
    if (file === null) {
        ElMessage({
            message: "请传入zip类型的文件",
            type: "error"
        })
    } else {
        // 
    }
}
const clearFiles = () => {
    console.log("Clear files");
}
</script>