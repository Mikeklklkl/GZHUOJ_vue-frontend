<template>
    <div>
      <div ref="preview" class="vditor-reset"></div>
    </div>
</template>

<script setup>
  import 'vditor/dist/index.css';
  import Vditor from 'vditor';
  import {defineProps, onMounted, nextTick, ref , watch} from 'vue';

  const props = defineProps({
    htmlValue: {
        type: String,
        required: false,
        default: ''
    }
  })
  const preview = ref(null)


const renderVditorContent =  () =>{
  const previewElement = preview.value;
  if(previewElement == null) return;
//       previewElement.innerHTML = `<div class="language-math">f_1 = 1</div>
// <pre><code class="language-cpp">#include&lt;iostream&gt;
// using namespace std;

// signed mian() {
//     ios::sync_with_stdio(false);
//     cin.tie(0),cout.tie(0);
//     int t = 1;
//     while(t--){solve(t);}
// }
// </code></pre>X
// `;
    console.log(props.htmlValue)
    // previewElement.innerHTML = props.htmlValue;
    previewElement.innerHTML = props.htmlValue; // 使用转义后的 HTML


    Vditor.setContentTheme('light', 'https://unpkg.com/vditor@3.10.4/dist/css/content-theme');
    Vditor.codeRender(previewElement);
    Vditor.highlightRender({"enable":true,"lineNumber":false,"defaultLang":"","style":"github"}, previewElement, 'https://unpkg.com/vditor@3.10.4');
    Vditor.mathRender(previewElement, {
    cdn: 'https://unpkg.com/vditor@3.10.4',
    math: {"engine":"KaTeX","inlineDigit":false,"macros":{}},
    });
    Vditor.mermaidRender(previewElement, 'https://unpkg.com/vditor@3.10.4', 'classic');
    Vditor.markmapRender(previewElement, 'https://unpkg.com/vditor@3.10.4', 'classic');
    Vditor.flowchartRender(previewElement, 'https://unpkg.com/vditor@3.10.4');
    Vditor.graphvizRender(previewElement, 'https://unpkg.com/vditor@3.10.4');
    Vditor.chartRender(previewElement, 'https://unpkg.com/vditor@3.10.4', 'classic');
    Vditor.mindmapRender(previewElement, 'https://unpkg.com/vditor@3.10.4', 'classic');
    Vditor.abcRender(previewElement, 'https://unpkg.com/vditor@3.10.4');
    Vditor.mediaRender(previewElement);
  }
    // 定义语音包的代码。暂时用不上。
    // Vditor.speechRender(previewElement);

onMounted(async () => {
    await nextTick();
  renderVditorContent();  // 初始渲染
})

  // 监听 props.htmlValue 的变化，并重新渲染
watch(() => props.htmlValue, () => {
  renderVditorContent();
});

</script>
  
<style scoped>
  .vditor-reset {
    /* 自定义样式 */
  }
</style>
  