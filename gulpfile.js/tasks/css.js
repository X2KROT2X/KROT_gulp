const { src, dest} = require("gulp");

//*конфиги
const path = require("../config/path.js");
const app = require("../config/app.js");

//*плагены
const plumder = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const webpcss = require("gulp-webp-css");


//*Обработка html
const css = () => {
  return src(path.css.src, { sourcemaps: app.isDev})
    .pipe(plumder({
      errorHandler: notify.onError(error =>({
        title:"css",
        message: error.message
      }))
    }))
    .pipe(concat("style.css"))
    .pipe(cssimport())
    .pipe(webpcss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "css-" }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev}))
    .pipe(rename({ suffix:".min" }))
    .pipe(csso())
    .pipe(size({ title: "css-min-" }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev}))
}
//exsport задачи
module.exports=css;