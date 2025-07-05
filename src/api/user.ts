
export interface UserLoginVO {
  userName: string
  passWord: string
}

export interface UserQueryVO {
    USER_ID: number
}



import type {UserLoginVO, UserQueryVO} from "@/types/type.ts";
import axiosInstance from "@/config/request.ts";

// 登录
export const login = (data: UserLoginVO) => {
    return axiosInstance.post('/project/admin/login', data )
}


export const getUserInfo = () => {
    return axiosInstance.post( '/project/queryUserInfo' )
}

export const getDynamicRouter = (data: UserQueryVO) => {
    return axiosInstance.post( '/project/user/queryUserDynamicRouter', data )
}