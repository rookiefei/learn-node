let fs = require('fs')

// 创建读取流
let rs = fs.createReadStream('./hello.txt', {flags: 'r', encoding: 'utf-8'})
console.log(rs)

rs.on('open', function () {
  console.log("读取的文件已打开")
})

rs.on('close', function () {
  console.log("读取流结束")
})

// 每一批数据流入完成
rs.on('data', function (chunk) {
  console.log(chunk)
})

