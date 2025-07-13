<script setup lang="ts">

import NavigateLeft from "@/components/layout/components/NavigateLeft.vue";
import {onMounted} from "vue";
import {ref} from "vue";
import {usePermissionStore} from "@/stores/permission.ts";
import router from "@/router";

const dynamicRouters = ref<any[]>([]) // 初始化为空数组，避免 undefined
const permissionStore = usePermissionStore();

onMounted(async () => {



  // 从 store 中取出 layout.children
  // const layoutRoute = permissionStore.routes.find(r => r.path === '/layout')
  // if (layoutRoute && layoutRoute.children) {
  //   sidebarRouters.value = layoutRoute.children
  // }

  dynamicRouters.value = permissionStore.routes;

  // const routes = permissionStore.getRoutes;
  // console.log("获取动态路由信息", routes);
  // dynamicRouters.value = routes;
  // await getDynamicRouter()



  // getDynamicRouter().then(res => {
  //   console.log("获取动态路由信息", res);
  //   const data = res.data;
  //
  //   const dynamicRoutes = generateDynamicRoutes(data);
  //   dynamicRouters.value = dynamicRoutes;
  //
  //   // 动态添加路由到 Vue Router
  //   dynamicRoutes.forEach(route => {
  //     router.addRoute(route); // 添加每个动态路由
  //   });
  //
  //   console.log("动态路由", router)
  //
  // });


  // permissionStore.getDynamicRoutes().then(res =>{
  //   dynamicRouters.value = res; //路由信息给菜单获取链接
  //
  //   // 动态添加路由到 Vue Router
  //   res.forEach(route => {
  //       router.addRoute(route); // 添加每个动态路由
  //     });
  //   console.log("动态路由", dynamicRouters)
  // }).catch(error => {
  //   console.log(error)
  // })

  // await getDynamicRouter();

});


async function getDynamicRouter() {
  try {
    const dynamicRoutesData = await permissionStore.getDynamicRoutes();
    dynamicRouters.value = dynamicRoutesData;

    // 动态添加路由到 Vue Router
    dynamicRoutesData.forEach(route => {
      router.addRoute(route); // 添加每个动态路由
    });

  } catch (e) {
  }
}


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