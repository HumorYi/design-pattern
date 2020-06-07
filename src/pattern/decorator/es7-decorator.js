/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 21:51:08
 * @Description: es7装饰器，需要babel支持
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 22:22:38
 * @LastEditorsDescription:
 */


// target指定要装饰的目标
const testDec = target => {
  target.isDev = true
}

// 传参
const testDecArg = isDec => target => {
  target.isDecArg = isDec
}

@testDec
@testDecArg(false)
class Demo { }

console.log(Demo.isDev)
console.log(Demo.isDecArg)

// 等同于
/*
  @testDec
  class Demo{}
  Demo = testDec(Demo) || Demo
*/

// 混合装饰器，扩展目标原型
const mixins = (...list) => target => {
  Object.assign(target.prototype, ...list)
}

const Foo = {
  foo() {
    console.log('foo')
  },
  bar() {
    console.log('bar')
  }
}

@mixins(Foo)
class Demo2 { }

let obj = new Demo2()
obj.foo()
obj.bar()

// 只读装饰器
const readonly = (target, name, descriptor) => {
  descriptor.writable = false
  return descriptor
}

class Person {
  constructor() {
    this.first = 'A'
    this.last = 'B'
  }

  @readonly
  name() {
    return `${this.first} ${this.last}`
  }
}

let person =new Person()
console.log(person.name())
// 只读方法
// person.name = () => console.log('change name method')

// 日志装饰器
const log = (target, name, descriptor) => {
  let oldVal = descriptor.value

  descriptor.value = (...args) => {
    console.log(`calling ${name} with ${args}`)
    return oldVal(...args)
  }

  return descriptor
}

class MyMath {
  @log
  add(a, b) {
    return a + b
  }
}

let myMath = new MyMath()
console.log(myMath.add(1, 2))
