<script setup lang="ts">

import NavigateLeft from "@/components/layout/components/NavigateLeft.vue";
import {onMounted} from "vue";
import {ref} from "vue";
import {usePermissionStore} from "@/stores/permission.ts";
import router from "@/router";

onMounted(async () => {

});


</script>

<template>


<!--  <div class="layout-container" style="display: flex; flex-direction: column; min-height: 100vh; width: 100%">-->
<!--    &lt;!&ndash; Header &ndash;&gt;-->
<!--    <div class="header" style="flex: 0 0 60px; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid #eee;">-->
<!--      <h1>Header</h1>-->
<!--    </div>-->

<!--    &lt;!&ndash; Main Content &ndash;&gt;-->
<!--    <div class="main" style="flex: 1 1 auto; display: flex; overflow: hidden;">-->

<!--      &lt;!&ndash; Sidebar &ndash;&gt;-->
<!--      <div class="sidebar" style="width: 200px; height: 100%; border-right: 1px solid #eee;">-->
<!--        <NavigateLeft />-->
<!--      </div>-->

<!--      &lt;!&ndash; Content &ndash;&gt;-->
<!--      <div class="content" style="flex: 1; padding: 20px; overflow-y: auto;">-->
<!--        <router-view />-->
<!--      </div>-->

<!--    </div>-->

<!--    &lt;!&ndash; Footer &ndash;&gt;-->
<!--    <div class="footer" style="flex: 0 0 40px; display: flex; align-items: center; justify-content: center; border-top: 1px solid #eee;">-->
<!--      <h1>Footer</h1>-->
<!--    </div>-->
<!--  </div>-->




<!--  <div style="min-height: 100vh;">-->
<!--    <el-container style="height: 100%;">-->

<!--      &lt;!&ndash; Header &ndash;&gt;-->
<!--      <el-header style="background-color: #fff; border-bottom: 1px solid #eee;">-->
<!--        Header-->
<!--      </el-header>-->

<!--      &lt;!&ndash; Main Content &ndash;&gt;-->
<!--      <el-container>-->

<!--        &lt;!&ndash; Left Sidebar &ndash;&gt;-->
<!--        <el-aside width="200px" style="border-right: 1px solid #eee;">-->
<!--          <NavigateLeft />-->
<!--        </el-aside>-->

<!--        &lt;!&ndash; Right Main Area &ndash;&gt;-->
<!--        <el-container>-->
<!--          <el-main style="padding: 20px; min-height: calc(100vh - 60px - 40px); overflow-y: auto;">-->
<!--            <router-view />-->
<!--          </el-main>-->
<!--        </el-container>-->

<!--      </el-container>-->

<!--      &lt;!&ndash; Footer &ndash;&gt;-->
<!--      <el-footer style="text-align: center; border-top: 1px solid #eee;">-->
<!--        Footer-->
<!--      </el-footer>-->

<!--    </el-container>-->
<!--  </div>-->


  <div style="min-height: 100vh; display: flex; flex-direction: column;">
    <el-header style="flex: 0 0 60px;">Header</el-header>

    <div style="flex: 1; display: flex; overflow: hidden;">
      <el-aside style="width: 200px; border-right: 1px solid #eee;">
        <NavigateLeft />
      </el-aside>

      <el-main style="
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  max-width: calc(100vw - 200px); /* 减去侧边栏宽度 */
  box-sizing: border-box;
">
        <router-view />
      </el-main>
    </div>

    <el-footer style="flex: 0 0 40px; text-align: center;">Footer</el-footer>
  </div>


</template>

<style scoped>

</style>