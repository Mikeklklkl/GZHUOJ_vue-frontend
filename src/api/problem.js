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
}) => axios.post('/gzhuoj-problem/problem/create', {
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
    problemType: problemType
});


// 查
export const getProblemContent = async({
    problemNum
}) => axios.post('gzhuoj-problem/problem/get/contents', {
    problemNum: problemNum
})