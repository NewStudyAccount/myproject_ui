import {defineStore} from "pinia";
import {generateDynamicRoutes} from "@/router/dynamicRouter.ts";
import {getDynamicRouter} from "@/api/authApi.ts";




export const usePermissionStore =defineStore('permisssion', {
    state: ()=>{
        return {
            routes: [],
            sidebarRoutes: []
        }
    },
    getters: {
        getRoutes: (state) => {
            return state.routes
        },
        getSidebarRoutes: (state) => {
            return state.sidebarRoutes
        }
    },
    actions:{
        getDynamicRoutes(){
            return new Promise((resolve, reject) => {
                getDynamicRouter().then(res=>{
                    console.log("获取路由信息",res)
                    // this.routes = res.data
                    this.routes = generateDynamicRoutes(res.data)
                    this.sidebarRoutes = generateDynamicRoutes(res.data)
                    resolve(this.sidebarRoutes)
                }).catch(err=>{
                    console.error('获取动态路由失败', err);
                    reject(err);
                })
            })
        },

    }
})