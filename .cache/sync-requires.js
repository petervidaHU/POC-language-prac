
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/petervida/POC-language-prac/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/petervida/POC-language-prac/src/pages/index.js")),
  "component---src-pages-mind-the-gap-js": preferDefault(require("/home/petervida/POC-language-prac/src/pages/mindTheGap.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/petervida/POC-language-prac/src/pages/using-typescript.tsx"))
}

