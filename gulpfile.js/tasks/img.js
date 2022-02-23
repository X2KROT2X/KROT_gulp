const { src, dest} = require("gulp");

//*конфиги
const path = require("../config/path.js");
const app = require("../config/app.js");

//*плагены
const plumder = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpIF = require("gulp-if");


//*Обработка img
const img = () => {
  return src(path.img.src)
    .pipe(plumder({
      errorHandler: notify.onError(error =>({
        title:"IMG",
        message: error.message
      }))
    }))
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpIF(app.isProd,imagemin(app.imagemin)))
    .pipe(dest(path.img.dest))
}

//exsport задачи
module.exports=img;