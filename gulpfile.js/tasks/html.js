const { src, dest} = require("gulp");

//*конфиги
const path = require("../config/path.js");
const app = require("../config/app.js");

//*плагены
const plumder = require("gulp-plumber");
const notify = require("gulp-notify");
const fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const webpHtml = require("gulp-webp-html");

//*Обработка html
const html = () => {
  return src(path.html.src)
    .pipe(plumder({
      errorHandler: notify.onError(error =>({
        title:"HTML",
        message: error.message
      }))
    }))
    .pipe(fileinclude())
    .pipe(webpHtml())
    .pipe(size({ title: "html-до" }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "html-после" }))
    .pipe(dest(path.html.dest))
}
//exsport задачи
module.exports=html;