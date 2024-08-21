import axios from '@/utils/axios.js'

export const getContestListService = async ({search, type, orders, pageSize, goPage}) => axios.post('/gzhuoj-contest/contest/list', {
    search: search,
    type: type,
    orders: orders,
    size: pageSize,
    current: goPage
});