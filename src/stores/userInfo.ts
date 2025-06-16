import { defineStore } from 'pinia'

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

const userInfo = defineStore('userInfo', {
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
        getUserInfo(): SysUser{
            return this.user
        },
        getPermissionCode(): string[]{
            return this.permissionCode
        },
        getRoles(): string[]{
            return this.roles
        }
    },
    actions: {
        setUserInfo(user: SysUser){
        },
        setPermissionCode(permissionCode: string[]){
        },
        setRoles(roles: string[]){
        }
    }
})