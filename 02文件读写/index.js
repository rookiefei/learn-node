let fs = require('fs')
// 导入文件模块
// node, 读写文件也有同步和异步的接口



// 同步读
let content = fs.readFileSync('hello.txt', {flag: 'r', encoding: 'utf-8'})

// 异步读, 需要封装一个promise
fs.readFile('hello.txt', {flag: 'r', encoding: 'utf-8'}, function (e, data) {
  console.log(111)
  console.log(data)
})

// 异步写
fs.writeFile('hello.txt', 'writeContent', {flag: 'w', encoding: 'utf-8'}, function (err) {
  if (err) {
    console.log('写入失败')
  } else {
    console.log('写入成功')
  }
})