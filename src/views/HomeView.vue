<script setup lang="ts">

import {getUserInfo} from "@/api/user.ts";
import {onMounted, reactive} from "vue";


const UserQueryVO = reactive({
  USER_ID: 1
})

const getUserinfo = () => {
  console.log("获取用户信息")
  const  params = JSON.stringify(UserQueryVO);
  console.log(params)
  getUserInfo(UserQueryVO).then(res => {
    console.log(res)
  }).catch(error => {
    console.log("请求失败",error)
  })
}



</script>

<template>

  <div>
    <h1>HomeView</h1>
    <button @click="getUserinfo">获取用户信息</button>

  </div>

</template>
