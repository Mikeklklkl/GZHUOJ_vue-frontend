import axios from '@/utils/axios.js'

export const userLoginService = async ({userAccount , password}) => axios.post('/gzhuoj-user/user/login', {
    userAccount, password
});
