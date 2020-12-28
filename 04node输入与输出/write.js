let fs = require('fs')

function write(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, {flag: 'w', encoding: 'utf-8'}, function (err) {
      if (err) {
        reject('写入失败')
      } else {
        resolve('写入成功')
      }
    })
  })
}
module.exports = {write}