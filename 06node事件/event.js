let events = require('events')
let fs = require('fs')
let ee = new events.EventEmitter()

ee.on('success', function (data) {
  console.log(1,data)
})

ee.on('success', function (data) {
  console.log(2,data)
})

ee.on('success', function (data) {
  console.log(3, data)
})

fs.readFile('hello.txt', {encoding: 'utf-8'}, function(err, data) {
  if (err) {
    console.log('err')
  } else {
    ee.emit('success', data)
  }
})