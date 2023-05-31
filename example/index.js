const FileBundler = require("file-bundler")

const filebundlerForCSSMaybeJS = new FileBundler({
   className: "FileBundler",
   pattern: "@?import"
})

const cssResults = filebundlerForCSSMaybeJS.bundle(`C:/>>/>>/>>/>>/css/index.css`)
console.log(cssResults)

const filebundlerForHTML = new FileBundler({
   className: "FileBundler",
   pattern: "include",
   domain_name: "my-domain-name"
})

const HTMLresults = filebundlerForHTML.bundle(`C:/>>/>>/>>/>>/html/index.html`)

console.log(HTMLresults)