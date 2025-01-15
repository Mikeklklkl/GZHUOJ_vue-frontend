import axios from "@/utils/axios.js";

export const createContestService = async ({
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
  selectedProblems,
}) =>
  axios.post("gzhuoj-contest/contest/create", {
    contestNum: contestNum,
    title: contestTitle,
    access: contestType,
    password: contestPassword,
    startTimes: contestTime[0].getTime(),
    endTimes: contestTime[1].getTime(),
    goldRadio: goldRadio,
    silverRadio,
    silverRadio,
    bronzeRadio,
    bronzeRadio,
    goldCount: goldCount,
    silverCount: silverCount,
    bronzeCount: bronzeCount,
    frozenMinute: frozenTimesBeforeEnd,
    frozenAfter: frozenTimesAfterEnd,
    language: languageSelected,
    description: description,
    descriptionHtml: descriptionHtml,
    selectedProblemMsgWhenCreateContestList: selectedProblems,
  });

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
  problemLetterIndex,
  language,
  code,
  teamAccount,
}) =>
  axios.post("/gzhuoj-contest/submit", {
    contestNum: contestNum,
    problemLetterIndex: problemLetterIndex,
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

export const getContestBasicInfoService = async ({ contestNum }) =>
  axios.get("/gzhuoj-contest/contest/query/basic-contest-info-for-user", {
    params: {
      contestNum: contestNum,
    },
  });

export const getContestProblemCalculateService = async ({
  contestNum,
  problemLetterIndex,
}) =>
  axios.post("/gzhuoj-contest/regular/contest/problem/basic-calculation", {
    contestNum: contestNum,
    problemLetterIndex: problemLetterIndex,
  });

export const getContestSubmissionsService = async ({ 
  contestNum,
  problemLetterIndex,
  teamAccount,
  teamName,
  school,
  status,
  currentPage,
  pageSize
}) =>
  axios.get("/gzhuoj-contest/regular/contest/submissions", {
    params: {
      contestNum: contestNum,
      problemLetterIndex: problemLetterIndex,
      teamAccount: teamAccount,
      teamName: teamName,
      school: school,
      status: status,
      current: currentPage,
      size: pageSize
    },
  });


export const getContestBoardService = async ({
  contestNum,
  teamNameSelected,
  schoolSelected,
  currentPage,
  pageSize
}) =>
  axios.get("/gzhuoj-contest/regular/contest/board", {
    params: {
      contestNum: contestNum,
      teamNameSelected: teamNameSelected,
      schoolSelected: schoolSelected,
      current: currentPage,
      size: pageSize
    },
  });