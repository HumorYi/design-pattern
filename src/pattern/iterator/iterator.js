/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 11:58:10
 * @Description: 迭代器模式：顺序访问一个集合，使用者无需知道集合的内部结构（封装）
 *  设计原则验证：迭代器对象和目标对象相分离，迭代器将使用者和目标对象隔离开，
 *    符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 12:49:10
 * @LastEditorsDescription:
 */

class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }

  hasNext() {
    return this.index < this.list.length
  }

  next() {
    return this.hasNext() ? this.list[this.index++] : null
  }
}

class Container {
  constructor(list) {
    this.list = list
  }

  getIterator() {
    return new Iterator(this)
  }
}

const container = new Container([1, 2, 3])
let iterator = container.getIterator()

while(iterator.hasNext()) {
  console.log(iterator.next())
}