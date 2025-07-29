import axiosInstance from "@/config/request.ts";

// 登录
export const saveArticleContent = (data) => {
    return axiosInstance.post('/project/article/content/save', data )
}