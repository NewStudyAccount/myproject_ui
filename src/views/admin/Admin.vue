<script setup lang="ts">

import NavigateLeft from "@/components/admin/components/NavigateLeft.vue";
import {onMounted} from "vue";
import {getDynamicRouter} from "@/api/user.ts";
import router from "@/router";
import {generateDynamicRoutes} from "@/router/dynamicRouter.ts";



onMounted(async () => {
  getDynamicRouter().then(res => {
    console.log("获取动态路由信息", res);
    const data = res.data;

    const dynamicRoutes = generateDynamicRoutes(data);

    // 动态添加路由到 Vue Router
    dynamicRoutes.forEach(route => {
      router.addRoute(route); // 添加每个动态路由
    });

  });
});


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>

        <el-aside width="200px">
          <NavigateLeft/>
        </el-aside>
        <el-container>

          <!--主体内容-->
          <el-main>
            <router-view/>
          </el-main>

          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>