const { src, dest} = require("gulp");

//*конфиги
const path = require("../config/path.js");
const app = require("../config/app.js");

//*плагены
const plumder = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");


//*Обработка font
const font = () => {
  return src(path.font.src)
    .pipe(plumder({
      errorHandler: notify.onError(error =>({
        title:"font",
        message: error.message
      }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest));
}

//exsport задачи
module.exports=font;