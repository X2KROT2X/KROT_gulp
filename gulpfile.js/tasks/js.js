const { src, dest} = require("gulp");

//*конфиги
const path = require("../config/path.js");
const app = require("../config/app.js");

//*плагены
const plumder = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const size = require("gulp-size");
const webpack= require("webpack-stream");


//*Обработка js
const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev})
    .pipe(plumder({
      errorHandler: notify.onError(error =>({
        title:"JS",
        message: error.message
      }))
    }))
    .pipe(size({ title: "js до-" }))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(size({ title: "js после-" }))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev}))
}

//exsport задачи
module.exports=js;