import axios from '@/utils/axios.js'

export const userManagerListService = async ({search, currentPage, pageSize}) => axios.get('/gzhuoj-user/admin/userManager/userList', {
    params: {
        search: search,
        current: currentPage,
        size: pageSize
    }
});