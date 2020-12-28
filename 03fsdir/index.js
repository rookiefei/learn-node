// 文件夹读取，读取文件名
let fs = require('fs')
fs.readdir('../02文件读写', function (err, files) {
  console.log(files)
})