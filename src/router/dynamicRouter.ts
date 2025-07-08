import type {RouteRecordRaw} from "vue-router";

// 匹配views里面所有的.vue文件
const modules = import.meta.glob('./../views/**/*.vue')


// 动态生成路由配置
export const generateDynamicRoutes = (backendRoutes: any[]): RouteRecordRaw[] => {
    return backendRoutes.map(route => ({
        path: route.path,
        name: route.componentName,
        component: loadView(route.component),
        // 如果有 meta、children 等字段也可以一并处理
        meta:{
            title: route.menuName,
        }
    }));
};

export const loadView = (view) => {

    console.log('尝试加载组件:', view)
    console.log('views里面所有的.vue文件:', modules)
    let res
    for (const path in modules) {
    console.log('views里面path:', path)
        const dir = path.split('views/')[1].split('.vue')[0]
        if (dir === view) {
            res = () => modules[path]()
        }
    }
    return res
}