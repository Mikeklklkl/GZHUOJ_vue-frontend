import axios from 'axios';

export const userLoginService = async ({ userAccount, password }) => {
    // 定义要发送的数据
    var data = JSON.stringify({
        "userAccount": userAccount,
        "password": password
    });

    // 配置axios请求
    var config = {
        method: 'post',  // 请求方法
        url: 'http://localhost:8009/gzhuoj/user/login',  // 请求URL
        headers: { 
            'Content-Type': 'application/json',  // 设置内容类型为JSON
            'Accept': 'application/json'
        },
        data: data  // 设置请求体数据
    };

    try {
        // 发送请求
        const response = await axios(config);
        // 请求成功时打印响应数据
        console.log(JSON.stringify(response.data));
    } catch (error) {
        // 请求失败时处理错误
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // 请求已发出，但没有收到响应
            console.log(error.request);
        } else {
            // 发送请求时出现错误
            console.log('Error', error.message);
        }
        console.log(error.config);
    }
}
