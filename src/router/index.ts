import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "@/views/ProductList.vue";
import Login from "@/views/Login.vue";
import Layout from "@/components/layout/Layout.vue";
import {usePermissionStore} from "@/stores/permission.ts";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/product',
            name: 'product',
            component: ProductList,
        },
        {
            path: '',
            component: Layout,
            name: 'layout',
            children: []
        }
    ],
})


router.beforeEach(async (to, from, next) => {
    // const userStore = userInfoStore();
    const isLogin = localStorage.getItem('token');

    if (!isLogin && to.path !== '/login') {
        next('/login');
    } else {
        if (usePermissionStore().routes.length === 0) {
            console.log("路由守卫获取路由")
            await initDynamicRoutes(); // 刷新后重新加载路由
        }
        next(); // 放行
    }
});

async function initDynamicRoutes() {
    const permissionStore = usePermissionStore();
    if (permissionStore.routes.length === 0) {
        try {
            const routes = await permissionStore.getDynamicRoutes(); // 请求并保存路由
            routes.forEach(route => {
                router.addRoute(route); // 添加动态路由
            });
            console.log("路由守卫获取路由,重新加载路由信息", router.getRoutes());
        } catch (error) {
            console.error("加载动态路由失败", error);
        }
    }
}



export default router
