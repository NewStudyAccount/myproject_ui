import { defineStore } from 'pinia'
import {getUserInfo, login} from "@/api/user.ts";

// 用户信息
interface SysUser{
    userId: number,
    userName: string,
    userAvatorUrl: string
}

interface SysUserInfo{
    user: SysUser,
    permissionCode: string[],
    roles: string[]
}

export const userInfoStore = defineStore('userInfoStore', {
    state: (): SysUserInfo => ({
        user: {
            userId: -1,
            userName: '',
            userAvatorUrl: ''
        },
        permissionCode: [],
        roles: []
    }),
    getters: {
        getUserInfo: (state) =>{
            return state.user;
        },
        getPermissionCode: (state) =>{
            return state.permissionCode
        },
        getRoles: (state)=>{
            return state.roles
        }
    },
    actions: {
        // setUserInfo(user: SysUser){
        //     console.log("开始设置store的值"+user)
        //     // this.user = {...user}
        //     this.user.userId = user.userId
        //     this.user.userName = user.userName
        //     this.user.userAvatorUrl = user.userAvatorUrl
        //     // this.$patch({
        //     //     user: { ...user }
        //     // })
        // },
        setPermissionCode(permissionCode: string[]){
        },
        setRoles(roles: string[]){
        },
        async login(data: UserLoginVO){
            await login(data).then(res=>{
                console.log("登录成功",res)
                const token = res.data.token;
                if (token){
                    localStorage.setItem('token', token);
                }
                console.log("store登录成功返回值",res)
                getUserInfo().then(res=>{
                    console.log("存储用户信息",res)
                    this.user.userId = res.data.sysUser.userId
                    this.user.userName = res.data.sysUser.userName
                    this.user.userAvatorUrl = res.data.sysUser.userAvatorUrl
                    this.permissionCode = res.data.permissionCode

                    return true; // 登录成功返回 true

                }).catch(err=>{
                    console.error('获取用户信息失败', err);
                    return false; // 登录失败返回 false
                })


            }).catch(err=>{
                console.error('登录失败', err);
                return false; // 登录失败返回 false
            })

        },
    },
    // persist: {
    //     storage: sessionStorage, // 使用 session 存储
    //     key: 'userInfoStore'        // 自定义 localStorage 键名
    // }
})