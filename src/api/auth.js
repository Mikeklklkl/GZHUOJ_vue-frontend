import service from '@/utils/request.js'

export const userLoginService = async ({userAccount , password}) => service.get('/user/login', {
    userAccount, password
});