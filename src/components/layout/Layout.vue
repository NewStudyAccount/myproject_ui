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


  <div class="layout-container" style="display: flex; flex-direction: column; min-height: 100vh; width: 100%">
    <!-- Header -->
    <div class="header" style="flex: 0 0 60px; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid #eee;">
      <h1>Header</h1>
    </div>

    <!-- Main Content -->
    <div class="main" style="flex: 1 1 auto; display: flex; overflow: hidden;">

      <!-- Sidebar -->
      <div class="sidebar" style="width: 200px; height: 100%; border-right: 1px solid #eee;">
        <NavigateLeft />
      </div>

      <!-- Content -->
      <div class="content" style="flex: 1; padding: 20px; overflow-y: auto;">
        <router-view />
      </div>

    </div>

    <!-- Footer -->
    <div class="footer" style="flex: 0 0 40px; display: flex; align-items: center; justify-content: center; border-top: 1px solid #eee;">
      <h1>Footer</h1>
    </div>
  </div>



<!--  <div class="common-layout">-->
<!--    <el-container width="100%">-->
<!--      <el-header>Header</el-header>-->

<!--      <el-container>-->
<!--        <el-aside width="10%">-->
<!--          <NavigateLeft/>-->
<!--        </el-aside>-->
<!--        <el-container>-->
<!--          <el-main width="80%">-->
<!--            <router-view/>-->
<!--          </el-main>-->
<!--        </el-container>-->
<!--      </el-container>-->

<!--      <el-footer>Footer</el-footer>-->

<!--    </el-container>-->
<!--  </div>-->

</template>

<style scoped>

</style>