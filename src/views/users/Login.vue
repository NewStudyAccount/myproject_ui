<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {login} from "@/api/user.ts";
import type {UserLoginVO} from "@/types/type.ts";
import {sortUserPlugins} from "vite";

// ruleFormRef 是一个 响应式引用，用于持有 <el-form> 的实例。 通过该引用，可以在组件中调用表单的方法，例如：validate()：触发表单校验；
const ruleFormRef = ref<FormInstance>()

// const checkAge = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please input the age'))
//   }
//   setTimeout(() => {
//     if (!Number.isInteger(value)) {
//       callback(new Error('Please input digits'))
//     } else {
//       if (value < 18) {
//         callback(new Error('Age must be greater than 18'))
//       } else {
//         callback()
//       }
//     }
//   }, 1000)
// }
//
// const validatePass = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   } else {
//     if (ruleForm.checkPass !== '') {
//       if (!ruleFormRef.value) return
//       ruleFormRef.value.validateField('checkPass')
//     }
//     callback()
//   }
// }
// const validatePass2 = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input the password again'))
//   } else if (value !== ruleForm.pass) {
//     callback(new Error("Two inputs don't match!"))
//   } else {
//     callback()
//   }
// }

const UserLoginVO = reactive({
  USER_NAME: '',
  PASSWORD: '',
})



// const rules = reactive<FormRules<typeof ruleForm>>({
//   pass: [{ validator: validatePass, trigger: 'blur' }],
//   checkPass: [{ validator: validatePass2, trigger: 'blur' }],
//   age: [{ validator: checkAge, trigger: 'blur' }],
// })

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  console.log("提交表单",UserLoginVO)
  let promise = login(UserLoginVO);
  console.log(promise)
  // formEl.validate((valid) => {
  //   if (valid) {
  //     console.log('submit!')
  //   } else {
  //     console.log('error submit!')
  //   }
  // })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
<!-- 剔除校验     :rules="rules"-->
<!--  ref 绑定表单引用，用于调用验证方法（如 validate()、resetFields()）。
:model="ruleForm"：绑定数据模型，对应的是用户名、密码等字段。
prop="checkPass"：表示该字段对应的表单校验属性是 checkPass
v-model="ruleForm.PASSWORD"：但实际绑定的数据模型字段名为 PASSWORD。
-->
  <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="UserLoginVO"
      status-icon
      label-width="auto"
      class="demo-ruleForm"
  >
    <el-form-item label=用户名 prop="USER_NAME">
      <el-input v-model="UserLoginVO.USER_NAME" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="PASSWORD">
      <el-input v-model="UserLoginVO.PASSWORD" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>