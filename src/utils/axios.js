import axios, { Axios } from 'axios'
import config from '/public/config.json'
import router from '@/router'
import { ElMessage } from 'element-plus'

// ##### 设置axios的一些默认配置
// 1. 允许跨域信息设置凭证
axios.defaults.withCredentials = true
axios.defaults.baseURL = config.url
axios.defaults.timeout = 10000


// ##### 自定义添加请求头配置
// 1. 通用请求头的配置
axios.defaults.headers['token'] = localStorage.getItem('token') || ' '

// 2. post请求头配置
axios.defaults.headers.post['Content-Type'] = 'application/json'

/**
 * 请求拦截
 * 1. 加载动画
 * 2. 处理config
 */
axios.interceptors.request.use(
    config =>{
        return config
    },
    function(error){
        // 处理请求错误
        console.log("out before request")
        return Promise.reject(error);
    }
)

/**
 * 响应拦截
 * 1. 统一错误码处理
 * 2. 错误逻辑跳转
 */
axios.interceptors.response.use(
    response => {
        const token = response.headers['token'];
        console.log("token:", token);
        console.log("out after response")
        return response;
    },
    function(error){
        ElMessage("未知错误")
        return Promise.reject(error);
    }
)


export default axios;

