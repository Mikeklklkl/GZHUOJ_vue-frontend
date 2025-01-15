import axios from '@/utils/axios.js'

// 增加

export const createProblem = async ({
  problemTitle,
  problemNum,
  timeLimit,
  memoryLimit,
  description,
  descriptionHtml,
  inputDescription,
  inputDescriptionHtml,
  outputDescription,
  outputDescriptionHtml,
  explanation,
  explanationHtml,
  testExampleList,
  author,
  problemType,
}) =>
  axios.post("/gzhuoj-problem/problem/create", {
    problemName: problemTitle,
    problemNum: problemNum,
    timeLimit: timeLimit,
    memoryLimit: memoryLimit,
    description: description,
    descriptionHtml: descriptionHtml,
    inputDescription: inputDescription,
    inputDescriptionHtml: inputDescriptionHtml,
    outputDescription: outputDescription,
    outputDescriptionHtml: outputDescriptionHtml,
    testExampleList: testExampleList,
    explanation: explanation,
    explanationHtml: explanationHtml,
    author: author,
    problemType: problemType,
  });

export const testCaseUploadService = async ({ problemNum, testCase }) => {
  const formData = new FormData();
  formData.append("problemNum", problemNum);
  formData.append("testCase", testCase);

  return await axios.post("/gzhuoj-problem/judge/testcase/upload", formData, {
    headers: {
        'Content-Type': 'multipart/form-data'        
    }
  });
};



// 查
export const getProblemContent = async({
    problemNum
}) => axios.post('gzhuoj-problem/problem/get/contents', {
    problemNum: problemNum
})

