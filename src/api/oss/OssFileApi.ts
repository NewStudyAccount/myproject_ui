import axiosInstance from "@/config/request.ts";

axiosInstance


// 登录
export const login = () => {
    return axiosInstance.post('/project/admin/login', data )
}
