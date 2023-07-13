"use strict";
exports.id = 162;
exports.ids = [162];
exports.modules = {

/***/ 5730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mindTheGap)
});

// EXTERNAL MODULE: external "/home/petervida/POC-language-prac/node_modules/react/index.js"
var index_js_ = __webpack_require__(9766);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/components/quizz.jsx
const Quizz=({questions,answers})=>{const{0:selectedAnswers,1:setSelectedAnswers}=(0,index_js_.useState)([]);const{0:result,1:setResult}=(0,index_js_.useState)([]);const handleAnswerChange=(index,event)=>{const newSelectedAnswers=[...selectedAnswers];newSelectedAnswers[index]=event.target.value;setSelectedAnswers(newSelectedAnswers);};const handleSubmit=()=>{console.log('selected answers: ',selectedAnswers);const temp=answers.map((a,index)=>index===+selectedAnswers[index]);console.log('result temp: ',temp);setResult(temp);};return/*#__PURE__*/index_js_default().createElement("div",null,questions.map((question,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index},/*#__PURE__*/index_js_default().createElement("span",null,question),/*#__PURE__*/index_js_default().createElement("select",{value:selectedAnswers[index]||'',onChange:event=>handleAnswerChange(index,event)},/*#__PURE__*/index_js_default().createElement("option",{value:""},"Select an answer"),answers.map((answer,answerIndex)=>/*#__PURE__*/index_js_default().createElement("option",{key:answerIndex,value:answerIndex},answer))),result[index]?/*#__PURE__*/index_js_default().createElement("span",null,"OK"):/*#__PURE__*/index_js_default().createElement("span",null,"INCORRECT"),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null))),/*#__PURE__*/index_js_default().createElement("button",{onClick:handleSubmit},"Submit"),result.every(r=>r)&&"--wünderful--");};/* harmony default export */ const quizz = (Quizz);
;// CONCATENATED MODULE: ./src/pages/mindTheGap.js
//require('dotenv').config();


const MindTheGap = () => {
  const {
    0: task,
    1: setTask
  } = (0,index_js_.useState)('');
  const {
    0: res,
    1: setRes
  } = (0,index_js_.useState)('');
  const {
    0: l,
    1: setL
  } = (0,index_js_.useState)(false);
  (0,index_js_.useEffect)(() => {
    var _res$data;
    console.log('incoming res: ');
    const input = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.trim();
    let temp;
    if (input) {
      temp = input.split('QUESTION:').map(fullTask => fullTask.split('ANSWER:').map(separatedTaskPart => separatedTaskPart.trim().replace(/\n/g, ""))).filter(arr => arr.length === 2).reduce((acc, task) => {
        acc.questions.push(task[0]);
        acc.answers.push(task[1]);
        return acc;
      }, {
        questions: [],
        answers: []
      });
    }
    console.log('separated res: ', temp);
    setTask(temp);
  }, [res]);
  const prompt = `You are an English teacher, I am a student. I want to reach the C1 level of English, and I need to practice. Create a fill-the-blank space exercise for English learners to practice level C1 English sentences. Like this: QUESTION: Taking on new challenges can ___ your motivation., ANSWER: boost.
  Create 10 sentences about a generic topic with C1 level of English. This is a mind-the-gap exercise. Start every sentence with this string: "QUESTION:"`;
  const callOpenAI = async () => {
    const {
      Configuration,
      OpenAIApi
    } = __webpack_require__(6485);
    const configuration = new Configuration({
      apiKey: ({}).OAI
    });
    const openai = new OpenAIApi(configuration);
    let response;
    setL(true);
    try {
      response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 1000,
        temperature: 1
      });
    } catch (err) {
      console.log('error in api call:', err.message || err);
    }
    const r = {
      data: response.data.choices[0].text
    };
    // const stringed = JSON.stringify(r);
    console.log('response::::', r);
    setRes(r);
    setL(false);
  };
  return /*#__PURE__*/index_js_default().createElement("div", null, l && /*#__PURE__*/index_js_default().createElement("div", null, "loading"), /*#__PURE__*/index_js_default().createElement("button", {
    onClick: callOpenAI
  }, "Invoke OpenAI API"), /*#__PURE__*/index_js_default().createElement("div", null, (task === null || task === void 0 ? void 0 : task.answers) && /*#__PURE__*/index_js_default().createElement(quizz, {
    questions: task.questions,
    answers: task.answers
  })));
};
/* harmony default export */ const mindTheGap = (MindTheGap);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-mind-the-gap-js.js.map