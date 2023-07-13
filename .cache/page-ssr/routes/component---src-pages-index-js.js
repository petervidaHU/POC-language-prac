"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 5592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/home/petervida/POC-language-prac/node_modules/react/index.js"
var index_js_ = __webpack_require__(9766);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/header.js
const Header=({siteTitle})=>/*#__PURE__*/index_js_.createElement("header",{style:{margin:`0 auto`,padding:`var(--space-4) var(--size-gutter)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`}},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/",style:{fontSize:`var(--font-sm)`,textDecoration:`none`}},siteTitle),/*#__PURE__*/index_js_.createElement("img",{alt:"Gatsby logo",height:20,style:{margin:0},src:"data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h106.1v28h-106.1z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='m89 11.7c-.8 0-2.2.2-3.2 1.6v-8.10005h-2.8v16.80005h2.7v-1.3c1.1 1.5 2.6 1.5999 3.2 1.5999 3 0 5-2.2999 5-5.2999s-2-5.3-4.9-5.3zm-.7 2.5c1.7 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8c-1.7 0-2.8-1.2-2.8-2.8s1.1-2.8 2.8-2.8z' fill-rule='evenodd'/%3E%3Cpath d='m71.2 21.9999v-7.6h1.9v-2.4h-1.9v-3.40005h-2.8v3.40005h-1.1v2.4h1.1v7.6z'/%3E%3Cpath clip-rule='evenodd' d='m65.6999 12h-2.9v1.3c-.8999-1.5-2.4-1.6-3.2-1.6-2.9 0-4.8999 2.4-4.8999 5.3s1.9999 5.2999 5.0999 5.2999c.8 0 2.1001-.0999 3.1001-1.5999v1.3h2.7999zm-5.1999 7.8c-1.7001 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.7 0 2.7999 1.2 2.7999 2.8s-1.1999 2.8-2.7999 2.8z' fill-rule='evenodd'/%3E%3Cpath d='m79.7001 14.4c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.1261.0472.2621.0945.4037.1437.7571.2632 1.6751.5823 2.0963 1.2563.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.0999-3 1.0999c-2.1 0-3.2-.9999-3.9-1.6999l1.5-1.7c.6.6 1.4 1.2 2.2 1.2s1.4-.4 1.4-1.1c0-.6-.5-.9-.9-1l-.6-.2c-.0687-.0295-.1384-.0589-.2087-.0887l-.0011-.0004c-.6458-.2729-1.3496-.5704-1.8902-1.1109-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1z'/%3E%3Cpath d='m98.5 20.5-4.8-8.5h3.3l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2z'/%3E%3Cpath d='m47 13.7h7c0 .0634.01.1267.0206.1932.0227.1435.0477.3018-.0206.5068 0 4.5-3.4 8.1-8 8.1s-8-3.6-8-8.1c0-4.49995 3.6-8.09995 8-8.09995 2.6 0 5 1.2 6.5 3.3l-2.3 1.49995c-1-1.29995-2.6-2.09995-4.2-2.09995-2.9 0-4.9 2.49995-4.9 5.39995s2.1 5.3 5 5.3c2.6 0 4-1.3 4.6-3.2h-3.7z'/%3E%3C/g%3E%3Cpath d='m18 14h7c0 5.2-3.7 9.6-8.5 10.8l-13.19995-13.2c1.1-4.9 5.5-8.6 10.69995-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.29995 2.5-8.49995 6l11.49995 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8z' fill='%23fff'/%3E%3Cpath d='m6.2 21.7001c-2.1-2.1-3.2-4.8-3.2-7.6l10.8 10.8c-2.7 0-5.5-1.1-7.6-3.2z' fill='%23fff'/%3E%3Cpath d='m14 0c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-7.8 21.8c-2.1-2.1-3.2-4.9-3.2-7.6l10.9 10.8c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9-13.1-13.1c1.1-4.9 5.5-8.6 10.7-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.2 2.5-8.5 6l11.5 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8v-2h7c0 5.2-3.7 9.6-8.6 10.7z' fill='%237026b9'/%3E%3C/g%3E%3C/svg%3E"}));/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */const Layout=({children})=>{var _data$site$siteMetada;const data=(0,gatsby_browser_entry.useStaticQuery)("3649515864");return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement(header,{siteTitle:((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`}),/*#__PURE__*/index_js_.createElement("div",{style:{margin:`0 auto`,maxWidth:`var(--size-content)`,padding:`var(--size-gutter)`}},/*#__PURE__*/index_js_.createElement("main",null,children),/*#__PURE__*/index_js_.createElement("footer",{style:{marginTop:`var(--space-5)`,fontSize:`var(--font-sm)`}},"\xA9 ",new Date().getFullYear()," \xB7 Built with",` `,/*#__PURE__*/index_js_.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9766);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */function Seo({description,title,children}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,defaultTitle?`${title} | ${defaultTitle}`:title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 6387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/home/petervida/POC-language-prac/node_modules/react/index.js"
var index_js_ = __webpack_require__(9766);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/prompts/smallTalk.ts
const smallTalkPromt='The student, in the end of the answer should ask back something, to keep the small talk alive.';const smalltalkQuestion=['What is the weather like in your location?','Do you have any plans for the weekend?'];
// EXTERNAL MODULE: ./src/components/layout.js + 1 modules
var layout = __webpack_require__(5592);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(9357);
;// CONCATENATED MODULE: ./src/prompts/yourself.ts
const yourselfPromt='The answer should contain proper information about the answerer\'s job, work experience.';const yourselfQuestion=['Would you tell me about yourself?'];
;// CONCATENATED MODULE: ./src/components/form.tsx
/* provided dependency */ var fetch = __webpack_require__(1515);
;const Form=({topic,index})=>{const topicsOfLife={smallTalk:{prompt:smallTalkPromt,question:smalltalkQuestion},yourself:{prompt:yourselfPromt,question:yourselfQuestion}};const{0:message,1:setMessage}=(0,index_js_.useState)('');const{0:resp,1:setResp}=(0,index_js_.useState)('');const{0:load,1:setLoad}=(0,index_js_.useState)(false);const handleSubmit=async e=>{setLoad(true);e.preventDefault();const userAnswer=e.target.smallTalk.value;const AWS_URL='https://6r5j5xaxh8.execute-api.eu-central-1.amazonaws.com/first/oai';const response=await fetch(AWS_URL,{method:'POST',body:JSON.stringify({questionPrompt:topicsOfLife[topic].prompt,question:topicsOfLife[topic].question[index],userAnswer:userAnswer})});const{data}=await response.json();// console.log('data:', data);
setResp(data);setLoad(false);};const handleChange=e=>{setMessage(e.target.value);};return/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/index_js_default().createElement("textarea",{style:{width:'100%',height:'150px'},name:"smallTalk",value:message,onChange:handleChange,placeholder:"Enter your answer..."}),/*#__PURE__*/index_js_default().createElement("button",{type:"submit"},"Submit")),/*#__PURE__*/index_js_default().createElement("p",null,"the response: ",load?'loading...':resp));};/* harmony default export */ const components_form = (Form);
;// CONCATENATED MODULE: ./src/pages/index.js





const IndexPage = () => /*#__PURE__*/index_js_.createElement(layout/* default */.Z, null, /*#__PURE__*/index_js_.createElement("h1", null, "POC - project interview practicing with ChatGPT"), /*#__PURE__*/index_js_.createElement("div", null, "This is a POC for a practicing application for the english course of Project Interview. use the forms below, to give some answer for the different parts of the interview:"), /*#__PURE__*/index_js_.createElement("div", null, /*#__PURE__*/index_js_.createElement("h3", null, "small talk"), /*#__PURE__*/index_js_.createElement("p", null, "description of a good small talk answer..."), /*#__PURE__*/index_js_.createElement("p", null, "QUESTION: ", smalltalkQuestion[0]), /*#__PURE__*/index_js_.createElement(components_form, {
  topic: "smallTalk",
  index: "0"
}), /*#__PURE__*/index_js_.createElement("p", null, "description of a good small talk answer..."), /*#__PURE__*/index_js_.createElement("p", null, "QUESTION: ", smalltalkQuestion[1]), /*#__PURE__*/index_js_.createElement(components_form, {
  topic: "smallTalk",
  index: "1"
})), /*#__PURE__*/index_js_.createElement("div", null, /*#__PURE__*/index_js_.createElement("h3", null, "tell me about yourself"), /*#__PURE__*/index_js_.createElement("p", null, "description of a ..."), /*#__PURE__*/index_js_.createElement("p", null, "QUESTION:"), /*#__PURE__*/index_js_.createElement(components_form, {
  topic: "yourself"
})), /*#__PURE__*/index_js_.createElement("h2", null, "coming soon..."), /*#__PURE__*/index_js_.createElement("div", null, /*#__PURE__*/index_js_.createElement("h3", null, "communication issues"), /*#__PURE__*/index_js_.createElement("p", null, "description of a ..."), /*#__PURE__*/index_js_.createElement("p", null, "QUESTION: ?")), /*#__PURE__*/index_js_.createElement("div", null, /*#__PURE__*/index_js_.createElement("h3", null, "answering questions"), /*#__PURE__*/index_js_.createElement("p", null, "description of a ..."), /*#__PURE__*/index_js_.createElement("p", null, "QUESTION: ?"), /*#__PURE__*/index_js_.createElement("h3", null, "with PREP structure"), /*#__PURE__*/index_js_.createElement("h3", null, "answering with STAR")));

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
const Head = () => /*#__PURE__*/index_js_.createElement(seo/* default */.Z, {
  title: "Home"
});
/* harmony default export */ const pages = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map