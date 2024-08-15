import axios from '@/utils/axios.js'

export const userLoginService = async ({Account , password}) => axios.post('/gzhuoj-user/user/login', {
    userAccount: Account,
    password: password
});


export const teamLoginService = async ({Account , password}) => axios.post('/gzhuoj-contest/regular/contest/login', {
    teamAccount: Account,
    password: password
});