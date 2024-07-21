import axios from 'axios'
import config from '/public/config.json'
// import router from '@/router'


const service = axios.create({
    // 请求地址：
    baseURL: config.url,
    timeout: 10000
})

/**
 * 请求拦截
 * 1. 添加公共参数
 */
service.interceptors.request.use(
    config =>{
        // 发送请求前的一些逻辑处理
        // 1. 添加请求头
        // 2. 可选/ 加载动画
        // 3. 设置一些公共参数： 如果存在
        return config
    },
    function(error){
        // 处理请求错误
        return promise.reject(error);
    }
)

/**
 * 响应拦截
 * 1. 统一错误码处理
 */
service.interceptors.response.use(
    response => {
        // 例如转换数据格式
        return response;
    },
    function(error){
        // 全局错误管理： 比如重定向，向客户端发送报错信息
        // 隐藏加载动画
        
        return promise.reject(error);
    }
)


export default service;

