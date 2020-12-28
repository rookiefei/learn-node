let readline = require('readline')
let {write} = require('./write')
let r1 = readline.createInterface({
  output: process.stdout,
  input: process.stdin
})

function lcQuestion (title) {
  return new Promise((resolve, reject) => {
    r1.question(title, function(answer) {
      resolve(answer)
    })
  })
}

async function createPackage() {
  let name = await lcQuestion("what's your package name?")
  console.log(typeof name , name)
  let description = await lcQuestion("what's your package description?")
  let main = await lcQuestion("what's your package main file?")
  let author = await lcQuestion("what's your package main author?")
  let content = `{
    "name": "${name}",
    "version": "1.0.0",
    "description": "${description}",
    "main": "${main}",
    "scripts": {
      "test": "echo Error: no test specified && exit 1"
    },
    "keywords": [],
    "author": "${author}",
    "license": "ISC"
  }
  `
  await write('./package.json', content)
  r1.close()
}
createPackage()