/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 12:21:32
 * @Description:
 *  ES6 Iterator 为何存在？
 *    ES6语法中，有序集合的数据类型已经有很多
 *    Array Map Set String TypedArray arguments NodeList
 *    需要有一个统一的遍历接口来遍历所有数据类型
 *    注意：object不是有序集合，可以用Map代替
 *
 *  ES6 Iterator 是什么？
 *    以上数据类型，都有 [Symbol.iterator] 属性
 *    属性值是一个函数，执行函数返回一个迭代器
 *    这个迭代器通过 next 方法可顺序迭代子元素，
 *      返回数据结构: { value: Any, done: Boolean }, 通过 done 来判断迭代是否结束
 *    可运行 Array.prototype[Symbol.iterator] 来测试
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 12:23:59
 * @LastEditorsDescription:
 */

// for of 内部实现
/* const each = data => {
  let iterator = data[Symbol.iterator]()

  let item = { done: false }

  while (!item.done) {
    item = iterator.next()
    if (!item.done) {
      console.log(item.value)
    }
  }
} */


// 使用 for of 来遍历数据，数据必须是带有迭代器对象的：data[Symbol.iterator]
const each = data => {
  for (let item of data) {
    console.log(item)
  }
}


let arr = [1, 2, 3]
let map = new Map()
map.set('a', 1)
map.set('b', 2)

each(arr)
each(map)