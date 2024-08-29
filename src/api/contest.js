import axios from "@/utils/axios.js";

export const getContestListService = async ({
  search,
  type,
  orders,
  pageSize,
  goPage,
}) =>
  axios.post("/gzhuoj-contest/contest/list", {
    search: search,
    type: type,
    orders: orders,
    size: pageSize,
    current: goPage,
  });

export const getContestProblemsService = async ({ contestId }) =>
  axios.post("/gzhuoj-contest/regular/contest/problems", {
    contestId: contestId,
  });

export const submitService = async ({
  contestId,
  problemId,
  language,
  code,
  teamAccount,
}) =>
  axios.post("/gzhuoj-contest/submit", {
    contestId: contestId,
    problemId: problemId,
    language: language,
    code: code,
    teamAccount: teamAccount,
  });

export const getLanguageOptionsService = async ({ contestId }) =>
  axios.get("/gzhuoj-contest/regular/contest/options/language", {
    params: {
      contestId: contestId,
    },
  });

export const getProblemOptionsService = async ({ contestId }) =>
  axios.get("/gzhuoj-contest/regular/contest/options/problem", {
    params: {
      contestId: contestId,
    },
  });

export const getProblemContentService = async ({
  contestId,
  problemIdInContest,
}) =>
  axios.get("/gzhuoj-contest/get/problem/content", {
    params: {
      contestId: contestId,
      problemIdInContest: problemIdInContest,
    },
  });
