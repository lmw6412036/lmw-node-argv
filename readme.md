# lmw-node-argv
## 安装 
```angular2html
npm i -D lmw-node-argv
```
## 使用
```angular2html

//index.js
const lmwNodeArgv = require("./main")
let argv = lmwNodeArgv(process.argv);
console.log(argv);

//命令行运行
node index.js -a=l -b=m -c=w
{
    a:l,
    b:m,
    c:w
}
```
