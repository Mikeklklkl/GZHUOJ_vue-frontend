import axios from "@/utils/axios.js";


export const createContestService = async({
  contestNum,
  contestTitle,
  contestType,
  contestPassword,
  contestTime,
  goldRadio,
  silverRadio,
  bronzeRadio,
  goldCount, 
  silverCount,
  bronzeCount,
  frozenTimesBeforeEnd,
  frozenTimesAfterEnd,
  languageSelected,
  description,
  descriptionHtml,
  selectedProblems
}) => axios.post("gzhuoj-contest/contest/create" , {
  contestNum: contestNum,
  title: contestTitle,
  access: contestType,
  password: contestPassword,
  startTimes: contestTime[0].getTime(),
  endTimes: contestTime[1].getTime(),
  goldRadio: goldRadio,
  silverRadio, silverRadio,
  bronzeRadio, bronzeRadio,
  goldCount: goldCount,
  silverCount: silverCount,
  bronzeCount: bronzeCount,
  frozenMinute: frozenTimesBeforeEnd,
  frozenAfter: frozenTimesAfterEnd,
  language: languageSelected,
  description: description,
  descriptionHtml: descriptionHtml,
  selectedProblemMsgWhenCreateContestList: selectedProblems
})

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

export const getContestProblemsService = async ({ contestNum }) =>
  axios.post("/gzhuoj-contest/regular/contest/problems", {
    contestNum: contestNum,
  });

export const submitService = async ({
  contestNum,
  problemNum,
  language,
  code,
  teamAccount,
}) =>
  axios.post("/gzhuoj-contest/submit", {
    contestNum: contestNum,
    problemNum: problemNum,
    language: language,
    code: code,
    teamAccount: teamAccount,
  });

export const getLanguageOptionsService = async ({ contestNum }) =>
  axios.get("/gzhuoj-contest/regular/contest/options/language", {
    params: {
      contestNum: contestNum,
    },
  });

export const getProblemOptionsService = async ({ contestNum }) =>
  axios.get("/gzhuoj-contest/regular/contest/options/problem", {
    params: {
      contestNum: contestNum,
    },
  });

export const getProblemContentService = async ({
  contestNum,
  problemNumInContest,
}) =>
  axios.get("/gzhuoj-contest/get/problem/content", {
    params: {
      contestNum: contestNum,
      problemNumInContest: problemNumInContest,
    },
  });
