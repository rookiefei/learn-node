let fs = require('fs')

// 1 创建写入流
let ws = fs.createWriteStream("hello.txt", {flags: "w", encoding: "utf-8"})
console.log(ws)
ws.on('open', function () {
  console.log("文件打开")
})
ws.on('ready', function () {
  console.log("文件写入已准备")
})
ws.on('close', function () {
  console.log("文件写入完成，关闭")
})

ws.write("helloworld", function(e) {
  if (e) {
    console.log("文件写入失败")
  } else {
    console.log("文件写入成功")
  }
})
ws.end(function() {console.log("文件写入关闭")})