
import type {UserLoginVO, UserQueryVO} from "@/types/type.ts";
import request from "@/config/request.ts";

// 登录
export const login = (data: UserLoginVO) => {
    return request.post({ url: '/project/admin/login', data })
}


export const getUserInfo = (data: UserQueryVO) => {
    return request.post({ url: '/project/user/queryUserInfo', data })
}

export const getDynamicRouter = (data: UserQueryVO) => {
    return request.post({ url: '/project/user/queryUserDynamicRouter', data })
}