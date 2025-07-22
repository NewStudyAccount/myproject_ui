<script setup lang="ts">

import {ref} from "vue";

import {onMounted} from "vue";

const dialogVisible = ref(true);



onMounted(()=>{
  console.log("onMounted");
  dialogVisible.value = true;
})

</script>

<template>

  <el-row :gutter="20">


  </el-row>



  <el-dialog title="提示" v-model="dialogVisible" width="80%">
    <el-form>
      <el-form-item label="文章内容">
        <el-form-item label="内容" prop="content">
          <!-- Markdown 编辑器 -->
<!--          <MdEditor v-model="updateArticleForm.content" @onUploadImg="onUploadImg"-->
<!--                    editorId="updateArticleEditor" />-->
        </el-form-item>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </template>
  </el-dialog>


</template>

<style scoped>

</style>