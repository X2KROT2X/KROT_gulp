// TODO:сделать когда нибуть функцию что можно игпользовать как css и как scss 
// ! возможно не все роботает точно 

//подключение
const {watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

//конфиги
const path = require("./config/path.js");
const app = require("./config/app.js");

//Задачи
// *задача css или scss(sass) можно отключить или включить через добавление его в коментарии
const clear = require("./tasks/clear");
const html = require("./tasks/html");
const css = require("./tasks/css");
const scss = require("./tasks/scss");
const js = require("./tasks/js");
const img = require("./tasks/img");
const font  = require("./tasks/font");

//наблюдатели
// *некоторые наблюдатели можно отключить или включить через добавление его в коментарии
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.css.watch, css).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.font.watch, font).on("all", browserSync.reload);
}

//сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    },
    notify: false
  })

}

//Задачи
exports.html = html;
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.clear = clear;
exports.img = img;
exports.font = font;

//задачи сборки
const build  = series(
  clear,
  parallel(html,scss,css,js,font,img)
);
const dev  = series(
  build,
  parallel(watcher,server)
);
//сборка
// * хочешь работать с css дабовь его ручками в  parallel(html, ***)
exports.default= app.isProd
? build
: dev;