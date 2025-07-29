export interface UserLoginVO {
    userName: string
    passWord: string
}

import axiosInstance from "@/config/request.ts";

// 登录
export const login = (data: UserLoginVO) => {
    return axiosInstance.post('/project/admin/login', data )
}


export const getUserInfo = () => {
    return axiosInstance.post( '/project/queryUserInfo' )
}

export const getDynamicRouter = () => {
    return axiosInstance.post( '/project/getDynamicRouter')
}