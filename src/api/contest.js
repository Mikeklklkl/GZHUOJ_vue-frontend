import axios from '@/utils/axios.js'

export const getContestListService = async ({search, type, orders, pageSize, goPage}) => axios.post('/gzhuoj-contest/contest/list', {
    search: search,
    type: type,
    orders: orders,
    size: pageSize,
    current: goPage
});


export const getContestProblemsService = async ({contestId}) => axios.post('/gzhuoj-contest/regular/contest/problems', {
    cid: contestId
});

export const getProblemContentService = async({contestId, problemIdInContest}) => axios.get('/gzhuoj-contest/get/problem/content', {
    params: {
        contestId: contestId,
        problemIdInContest: problemIdInContest
    }
})
