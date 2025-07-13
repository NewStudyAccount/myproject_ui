<script setup lang="ts">

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


import { useRoute } from 'vue-router'
import { defineProps, watch } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import {usePermissionStore} from "@/stores/permission.ts";


const route = useRoute()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

//在 NavigateLeft.vue 中声明接收的 props
// const props = defineProps<{
//   routers: RouteRecordRaw[]
// }>()

// 监听 routers 的变化并打印
// 打印动态路由数据
// //

const permissionStore = usePermissionStore();
const routers = permissionStore.routes;


</script>

<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
          :default-active = "route.path"
          router
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
      >


        <h1>此处的菜单需要使用动态路由实现</h1>
<!--        <el-sub-menu index="1">-->
<!--          <template #title>-->
<!--            <el-icon><location /></el-icon>-->
<!--            <span>Navigator One</span>-->
<!--          </template>-->
<!--          <el-menu-item-group title="Group One">-->
<!--            <el-menu-item index="1-1">item one</el-menu-item>-->
<!--            <el-menu-item index="1-2">item two</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-menu-item-group title="Group Two">-->
<!--            <el-menu-item index="1-3">item three</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-sub-menu index="1-4">-->
<!--            <template #title>item four</template>-->
<!--            <el-menu-item index="1-4-1">item one</el-menu-item>-->
<!--          </el-sub-menu>-->
<!--        </el-sub-menu>-->

<!--        <el-menu-item index="2">-->
<!--          <el-icon><icon-menu /></el-icon>-->
<!--          <span>Navigator Two</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="3" disabled>-->
<!--          <el-icon><document /></el-icon>-->
<!--          <span>Navigator Three</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="4">-->
<!--          <el-icon><setting /></el-icon>-->
<!--          <span>Navigator Four</span>-->
<!--        </el-menu-item>-->




        <div v-for="route in routers" :key="route.path">
          <el-menu-item :index="route.path" v-if="!route.children">
            {{ route.meta?.title || route.name }}
          </el-menu-item>

          <el-sub-menu :index="route.path" v-if="route.children">
            <template #title>{{ route.meta?.title || route.name }}</template>
            <el-menu-item
                v-for="child in route.children"
                :key="child.path"
                :index="child.path"
            >
              {{ child.meta?.title || child.name }}
            </el-menu-item>
          </el-sub-menu>
        </div>


      </el-menu>


<!--      <el-menu :default-active="$route.path" router>-->
<!--        <div v-for="route in routers" :key="route.path">-->
<!--          <el-menu-item :index="route.path" v-if="!route.children">-->
<!--            {{ route.meta?.title || route.menuName }}-->
<!--          </el-menu-item>-->

<!--          <el-sub-menu :index="route.path" v-if="route.children">-->
<!--            <template #title>{{ route.meta?.title || route.menuName }}</template>-->
<!--            <el-menu-item-->
<!--                v-for="child in route.children"-->
<!--                :key="child.path"-->
<!--                :index="child.path"-->
<!--            >-->
<!--              {{ child.meta?.title || child.name }}-->
<!--            </el-menu-item>-->
<!--          </el-sub-menu>-->
<!--        </div>-->
<!--      </el-menu>-->

    </el-col>
  </el-row>

</template>

<style scoped>

</style>