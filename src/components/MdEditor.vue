<script setup>
// 引入Vditor 构造函数
import Vditor from 'vditor'
// 引入样式
import 'vditor/dist/index.css';
import {defineExpose, ref, defineProps, onMounted, watch } from 'vue';

// 定义独立的props
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
})


//获取DOM引用
const editorId = ref(props.id)
const vditor = ref(null)

// watch(() => props.modelValue, (newValue) => {
//   if(vditor.value && vditor.value.getValue() != newValue){
//     vditor.value.setValue(newValue || '')
//   }
// })

const getContent = () => {
  if(vditor.value) {
    return vditor.value.getValue()
  }
}
const getHTML = () => {
  if(vditor.value){
    return vditor.value.getHTML()
  }
}
const htmlToMarkdown = (value) =>{
  if(vditor.value){
    return vditor.value.html2md(value)
  }
}
const setValue = (str) =>{
  console.log(str)
  if(vditor.value){
    vditor.value.setValue(str); 
  }
} 

defineExpose({ getContent, getHTML, htmlToMarkdown, setValue});

 
//在组件初始化时，就创建Vditor对象，并引用
onMounted(() => {
  vditor.value = new Vditor(editorId.value,{
    height: '50vh',
    width: '50vw',
    // 键入事件
    toolbar:[
        "emoji",
        "headings",
        "bold",
        "italic",
        "strike",
        "link",
        "|",
        "list",
        "ordered-list",
        "check",
        "outdent",
        "indent",
        "|",
        "quote",
        "line",
        "code",
        "inline-code",
        "insert-before",
        "insert-after",
        "|",
        "upload",
        "record",
        "table",
        "|",
        "undo",
        "redo",
        "|",
        "fullscreen",
        "edit-mode",
        {
            name: "more",
            toolbar: [
                "both",
                "code-theme",
                "content-theme",
                "export",
                "outline",
                "preview",
                "info",
                "help",
            ],
        },
    ]
  })
})
 
</script>
 
<template>
  <!-- 指定一个容器 -->
  <div :id="editorId"></div>
  <!-- <div id="vditor"></div> -->
  <div> </div>
</template>