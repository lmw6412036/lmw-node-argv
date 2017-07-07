/**
 * Created by Administrator on 2017/7/6 0006.
 */
const autoVersion = require("auto-version");//返回一个generator函数
const path = require("path");
const co = require('hprose').co;
let file = path.join(__dirname, "./package.json");
co(autoVersion(file))

const lmwNodeArgv = require("./main")

let argv = lmwNodeArgv();

console.log(argv);