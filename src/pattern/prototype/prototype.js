/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 23:40:59
 * @Description: 原型模式：new 一个对象比较大或者不合适，clone自己，生成一个新对象
 *  例如：Object.create
 *  VS JS中的原型 prototype
 *    prototype可以理解为 ES6 class 的一种低层原理
 *    而 class 是面向对象的基础，并不是服务于某个模式
 *    若干年后 ES6 全面普及，大家可能会忽略掉 prototype
 *    但是 Object.create 却会长久存在 => 原型模式
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 23:48:52
 * @LastEditorsDescription:
 */

const prototype = {
  getName() {
    return this.first + ' ' + this.last
  },
  say() {
    console.log('hello')
  }
}

const x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
console.log(x.getName())
x.say()

const y = Object.create(prototype)
y.first = 'C'
y.last = 'D'
console.log(y.getName())
y.say()