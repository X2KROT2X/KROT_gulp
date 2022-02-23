//*плагены
const del = require("del");

//*конфиги
const path = require("../config/path.js");

//*чиска не октуальный версий
const clear = () => {
  return del(path.root);
}

//exsport задачи
module.exports=clear;