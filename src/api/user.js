import axios from '@/utils/axios.js'

export const userManagerListService = async ({search, currentPage, pageSize}) => axios.get('/gzhuoj-user/admin/userManager/userList', {
    params: {
        search: search,
        current: currentPage,
        size: pageSize
    }
});

export const userDelByUserAccount = async(userAccount) => axios.post('/gzhuoj-user/admin/usermanager/delete', {
    userAccount: userAccount
});