import type {RouteRecordRaw} from "vue-router";

// 动态生成路由配置
export const generateDynamicRoutes = (backendRoutes: any[]): RouteRecordRaw[] => {
    return backendRoutes.map(route => ({
        path: route.path,
        name: route.name,
        component: () => import(`@/views/${route.component}.vue`),
        // 如果有 meta、children 等字段也可以一并处理
    }));
};