import axios, { Axios } from 'axios'
import config from '/public/config.json'
import router from '@/router'
import { userInfoStore } from '@/stores/userInfoStore';

import RESULT_CODE from '/public/code.json'
import { ElMessage } from 'element-plus';

const userInfo = userInfoStore();
// ##### 设置axios的一些默认配置
// 1. 允许跨域信息设置凭证
axios.defaults.withCredentials = true
axios.defaults.baseURL = config.url
axios.defaults.timeout = 100000


// ##### 自定义添加请求头配置
// 1. 通用请求头的配置

// 2. post请求头配置
axios.defaults.headers.post['Content-Type'] = 'application/json'

/**
 * 请求拦截
 * 1. 加载动画
 * 2. 处理config
 */
axios.interceptors.request.use(
    config =>{
        // 设置token
        config.headers["token"] = userInfo.token
        return config
    },
    function(error){
        // 处理请求错误
        // console.log("out before request")
        // console.log(error.message)
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

        // const token = response.headers['token'];
        // console.log("token:", token);
        // console.log("out after response")
        if(response.config && response.config.method === 'options'){
            return response.resolve;
        }

        console.log("code" , response.data.code);
        if(response.data.code == RESULT_CODE.SUCCESS.code){
            return response;
        }
        switch(response.data.code){
            // =========== 登录校验权限
            // == 账户名不存在
            case RESULT_CODE.USER_USER_ACCOUNT_VERIFY_ERROR: {
                ElMessage({
                    showClose: true,
                    message: "账户名不存在",
                    type: "error"
                })
                break;
            }
            // ==========
            case RESULT_CODE.USER_PASSWORD_VERIFY_ERROR.code: {
                ElMessage({
                    showClose: true,
                    message: "密码校验错误",
                    type: "error"
                })   
                break;
            }
            // ============= 题目管理
            // == 题目num已经存在
            case RESULT_CODE.PROBLEM_ID_EXISTED.code: {
                ElMessage({
                    showClose: true,
                    message: "题目序号已被占用",
                    type: "error"
                })
                break;
            }
            case RESULT_CODE.SERVICE_ERROR.code: {
                ElMessage({
                    showClose: true,
                    message: "系统执行出错",
                    type: "error"
                })
                break;
            }
            default: {
                ElMessage({
                    showClose: true,
                    message: "未知错误",
                    type: "error"
                })
                console.log('前端无法识别的编码')
                break;
            }
        }
        // console.log(console.response.data.message);
        // return response;
        return Promise.reject(new error(response.message))
    },
    function(error){
        // console.log("here")
        // console.log(error);
        if(error.config &&  error.config.method !== 'options'){
            ElMessage({
                showClose: true,
                message: "系统错误",
                type: "error"
            })
        }
        return Promise.reject(error);
    }
)


export default axios;

