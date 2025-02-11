import {defineStore} from 'pinia'
import {reactive, ref} from 'vue'

export const userInfoStore = defineStore('userInfo', () =>{
    // 鉴权
    const token = ref(localStorage.getItem('token') || null)
    const setToken = (newToken: string) => {
        token.value = newToken
        localStorage.setItem('token', newToken);
    }
    const clearToken = () =>{
        token.value = ''
        localStorage.removeItem('token');
    }
    
    // 个人用户常用公开信息维护
    const userAccount = ref('')
    const userName = ref('')
    const setUserAccount = (newAccount: string) => {
        userAccount.value = newAccount
    }
    const resetUserAccount = () => {
        userAccount.value = '';
    }
    const setUserName = (newUserName: string) => {
        userName.value = newUserName
    }
    const resetUserName = () => {
        userName.value = ''
    }

    // 用户角色： 0 普通用户， 1 管理员 ， 2 超级管理员 ， 3 比赛团队
    const userType = ref(0)


    // 团队用户常用公开信息维护
    const teamAccount = ref('')
    const teamName = ref('')
    const setTeamAccount = (newAccount: string) => {
        teamAccount.value = newAccount
    }
    const resetTeamAccount = () => {
        teamAccount.value = '';
    }
    const setTeamName = (newUserName: string) => {
        teamName.value = newUserName
    }
    const resetTeamName = () => {
        teamName.value = ''
    }

    const checkIfLogin = () =>{
        // return token.value !== '' && token.value !== null
        return false
    }

    return {
        token, setToken , clearToken,
        userAccount , userName, 
        setUserAccount, resetUserAccount,
        setUserName, resetUserName,
        teamAccount, teamName,
        setTeamAccount, setTeamName,
        resetTeamAccount, resetTeamName,
        checkIfLogin,
        userType
    }
})