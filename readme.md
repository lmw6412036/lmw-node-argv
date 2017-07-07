# lmw-node-argv
## 安装 
```angular2html
npm i -D lmw-node-argv
```
## 使用
```angular2html

//index.js
const lmwNodeArgv = require("./main")
let argv = lmwNodeArgv();
console.log(argv);

//node命令行运行
node index.js -a=l -b=m -c=w
//npm运行
npm run dev -a=l -b=m -c=w
//输出
{
    a:l,
    b:m,
    c:w
}
```
