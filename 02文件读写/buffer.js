//JavaScript 语言没有用于读取或操作二进制数据流的机制
// buffer 存的是二进制数据，为了显示方便，显示的是十六进制

// 将字符串转成buffer对象
let str = '0'
let buf = Buffer.from(str)
console.log(buf) // <Buffer 30>  

//buffer转字符串
console.log(buf.toString()) // 0

// 开辟一个空的buffer（缓存区）
let buf1 = Buffer.alloc(10)
buf1[0] = 10
console.log(buf1)  // <Buffer 0a 00 00 00 00 00 00 00 00 00>