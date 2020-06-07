/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 11:14:54
 * @Description: 观察者模式 => Node.js 自定义事件
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 11:31:33
 * @LastEditorsDescription:
 */
const EventEmitter = require('events').EventEmitter

const emitter = new EventEmitter()

emitter.on('some', info => console.log('emitter one, the info is ', info))
emitter.on('some', info => console.log('emitter two, the info is ', info))
emitter.on('some', info => console.log('emitter three, the info is ', info))

emitter.emit('some', 'go')



class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

const simon = new Dog('simon')
simon.on('bark', function (name) {
  console.log(this.name, 'barked')
})

let counter = 0
let timer = setInterval(() => {
  counter++
  simon.emit('bark')

  if (counter === 10) {
    clearInterval(timer)
    counter = 0
  }
}, 1000);



const fs = require('fs')
let readStream = fs.createReadStream('./data.json')
let length = 0
readStream.on('data', chunk => {
  length += chunk.toString().length
})
readStream.on('end', () => console.log("length", length))



const readline = require('readline')
let rl = readline.createInterface({
  input: fs.createReadStream('./data.json')
})
let lineNum = 0
rl.on('line', content => {
  lineNum++
})
rl.on('close', () => console.log('lineNum', lineNum))