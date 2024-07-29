import {defineStore} from 'pinia'
import {ref} from 'vue'

export const userInfoStore = defineStore('userInfo', () =>{
    // 鉴权
    const token = ref('')
    const setToken = (newToken: string) => {
        token.value = newToken
    }
    const clearToken = () =>{
        token.value = ''
    }
    
    // 用户常用公开信息维护
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

    return {
        token, setToken , clearToken,
        userAccount , userName, 
        setUserAccount, resetUserAccount,
        setUserName, resetUserName
    }
})