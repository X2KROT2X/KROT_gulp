# сборка gulp для верстальщиков V 1.0.0

## расположение:

|ввод(src) |                            вывод(public)|
| папки    | пути                     |  |    папки       | пути                | 
| ------------- |:------------------: |:------------------: |:------------------: ||:------------------: |
| HTML     | ./src/html/\*\*/\*.html  | | HTML     | ./public/html/\*\*/\*.html           | 
| CSS      | ./src/css/\*\*/\*.css    | |CSS      | ./public/css/\*\*/\*.css             | 
| SASS     | ./src/sass/\*\*/\*.scss  | |SASS     | ./public/sass/\*\*/\*.scss           | 
| JS       | ./src/js/\*\*/\*.js      | |JS       | ./public/js/\*\*/\*.js               | 
| IMG      | ./src/img/\*\*/\*.img,...| |IMG      | ./public/img/\*\*/\*.img,...         | 
| FONT     | ./src/img/\*\*/\*.ttf,...| |FONT     | ./public/img/\*\*/\*.ttf,...         | 


## Инструкция:
  1. скачать пакет [node.js](https://nodejs.org/en/) для корекной роботы и взаможействия 
  2. скачать с репозитория
  3. написать команду `npm i` чтобы скачались все нужные пакеты 
  4. чтобы начать работу в режиме разработки напишите `npm start`
  5. чтобы начать работу в режиме публикации напишите `npm run build`

  ## устоновленые NPM пакеты:
  ["browser-sync"]() <br/>
  ["del"]() <br/>
  ["gulp"]() <br/>
  ["gulp-autoprefixer"]() <br/>
  ["gulp-babel"]() <br/>
  ["gulp-concat"]() <br/>
  ["gulp-cssimport"]() <br/>
  ["gulp-csso"]() <br/>
  ["gulp-file-include"]() <br/>
  ["gulp-fonter"]() <br/>
  ["gulp-group-css-media-queries"]() <br/>
  ["gulp-htmlmin"]() <br/>
  ["gulp-if"]() <br/>
  ["gulp-imagemin"]() <br/>
  ["gulp-newer"]() <br/>
  ["gulp-notify"]() <br/>
  ["gulp-plumber"]() <br/>
  ["gulp-rename"]() <br/>
  ["gulp-sass"]() <br/>
  ["gulp-shorthand"]() <br/>
  ["gulp-size"]() <br/>
  ["gulp-ttf2woff2"]() <br/>
  ["gulp-webp"]() <br/>
  ["gulp-webp-css"]() <br/>
  ["gulp-webp-html"]() <br/>
  ["sass"]() <br/>
  ["webpack"]() <br/>
  ["webpack-stream"]() <br/>