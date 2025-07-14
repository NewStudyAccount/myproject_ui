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


/**
 * 路径匹配器
 * @param {string} pattern
 * @param {string} path
 * @returns {Boolean}
 */
function isPathMatch(pattern, path) {
    const regexPattern = pattern.replace(/\//g, '\\/').replace(/\*\*/g, '.*').replace(/\*/g, '[^\\/]*')
    const regex = new RegExp(`^${regexPattern}$`)
    return regex.test(path)
}


const whiteList = ['/login', '/register']
const isWhiteList = (path) => {
    return whiteList.some(pattern => isPathMatch(pattern, path))
}


// 路由守卫
router.beforeEach(async (to, from, next) => {
    // const userStore = userInfoStore();
    const isLogin = localStorage.getItem('token');

    if (isLogin){
        if (usePermissionStore().routes.length === 0) {
            console.log("路由守卫获取路由")
            await initDynamicRoutes(); //
            console.log("跳转放行1")
            // 添加完路由后，强制重新导航
            next({ ...to, replace: true });
        }else {
            // 如果 to 路径没有匹配到任何路由
            // const resolved = router.resolve(to.fullPath);
            // console.log("跳转放行2",to.fullPath)
            // console.log("跳转放行2",resolved)
            // if (resolved.name == null) {
            //     console.warn(`路径 ${to.path} 未找到路由，尝试重新加载`);
            //     next({ ...to, replace: true }); // 可选：强制再次尝试
            // } else {
            //     next();
            // }
            next();
        }
    }else {
        // 没有token
        if (isWhiteList(to.path)) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
        }

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
            // console.log("路由守卫获取路由,重新获取的路由信息",routes);
            // console.log("路由守卫获取路由,重新加载路由信息", router.getRoutes());
        } catch (error) {
            console.error("加载动态路由失败", error);
        }
    }
}



export default router
