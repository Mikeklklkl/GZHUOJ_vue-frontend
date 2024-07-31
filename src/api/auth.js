import axios from '@/utils/axios.js'

export const userLoginService = async ({userAccount , password}) => axios.post('/user/login', {
    userAccount, password
});
