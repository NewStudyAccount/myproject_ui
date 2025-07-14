<script setup lang="ts">

</script>

<template>

  <el-dialog title="提示" v-model="dialogVisible">
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-form-item label="内容" prop="content">
          <!-- Markdown 编辑器 -->
          <MdEditor v-model="updateArticleForm.content" @onUploadImg="onUploadImg"
                    editorId="updateArticleEditor" />
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