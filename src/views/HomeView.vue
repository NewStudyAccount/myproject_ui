<script setup lang="ts">

import {getUserInfo} from "@/api/user.ts";
import {onMounted, reactive} from "vue";


const UserQueryVO = reactive({
  USER_ID: 1
})

const getUserinfo = () => {
  getUserInfo(UserQueryVO).then(res => {
    console.log(res)
  })
}



</script>

<template>

  <div>
    <h1>HomeView</h1>
    <button type="primary" @click="getUserinfo">获取用户信息</button>

  </div>

</template>
