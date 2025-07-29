<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { ref, shallowRef, onMounted, onBeforeUnmount } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { throttle } from 'lodash-es'
import {saveArticleContent} from "@/api/article/ContentApi.js";

// import {ArticleContentVo} from "@/api/article/ContentApi.js";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()





// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

// 工具栏配置
const toolbarConfig = {}

//编辑器配置
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

onMounted(() => {
  window.addEventListener('beforeunload', beforeUnloadHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', beforeUnloadHandler)
})

const beforeUnloadHandler = (e) => {
  if (valueHtml.value !== initialValue) {
    e.preventDefault()
    e.returnValue = '您有未保存的内容，确定要离开吗？'
  }
}

const saveContent = async (content) => {
  console.log("保存数据", content)

  const articleContentVo  =  {}
  articleContentVo.content = content
  await saveArticleContent(articleContentVo).then(res => {
    console.log("保存成功")
  }).catch(err => {
    console.log("保存失败")
  })
}

const save = () => {
  saveContent(valueHtml.value)
}


const handleCreated = (editor) => {
  editorRef.value = editor
  const menuKeys = editor.getAllMenuKeys()
  const config = editor.getConfig()
  // console.log('menuKeys', menuKeys)
  // console.log('config', config)

  const uplodConfig=  editor.getMenuConfig('uploadImage') // 获取 uploadImage 的当前配置
  console.log('uploadImageConfig', uplodConfig)


}

// const handleChange = (editor) => {
//   console.log('change:', editor.children)
//   console.log("valueHtml", valueHtml.value)
// }

//编辑内容变化时自动保存，可配合节流避免频繁请求。
//使用 lodash.throttle 或自定义节流函数控制频率。
const handleChange = throttle((editor) => {
  console.log("valueHtml", valueHtml.value)
  saveContent(valueHtml.value)
}, 1000)




const handleDestroyed = (editor) => {
  console.log('destroyed', editor)
}
const handleFocus = (editor) => {
  console.log('focus', editor)
}

//失去焦点
const handleBlur = (editor) => {
  console.log('失去焦点时，保存数据', editor)
  saveContent(valueHtml.value) // 调用保存方法

}
const customAlert = (info, type) => {
  alert(`【自定义提示】${type} - ${info}`)
}
const customPaste = (editor, event, callback) => {
  console.log('ClipboardEvent 粘贴事件对象', event)
  // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
  // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
  // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

  // 自定义插入内容
  editor.insertText('xxx')

  // 返回 false ，阻止默认粘贴行为
  event.preventDefault()
  callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）

  // 返回 true ，继续默认的粘贴行为
  // callback(true)
}
</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        mode="default"
    />
    <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        mode="default"
        @onCreated="handleCreated"
        @onChange="handleChange"
        @onDestroyed="handleDestroyed"
        @onFocus="handleFocus"
        @onBlur="handleBlur"
        @customAlert="customAlert"
        @customPaste="customPaste"
    />

    <button @click="save">保存内容</button>
  </div>
</template>
