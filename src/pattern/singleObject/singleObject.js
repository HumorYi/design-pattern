/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 20:14:41
 * @Description: 单例模式: 系统中被唯一使用，一个类只有一个实例
 *  例如：登录、购物车、vuex store
 *  设计原则验证：
 *    符合单一职责原则，只实例化唯一的对象
 *    没法具体开放封闭原则，但是绝对不违反开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 21:33:09
 * @LastEditorsDescription:
 */

class SingleObject {
  login() {
    console.log('login')
  }
}

SingleObject.getInstance = (() => {
  let instance = null

  return () => {
    if (!instance) {
      instance = new SingleObject()
    }

    return instance
  }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log('obj1 === obj2', obj1 === obj2);


let obj3 = new SingleObject()
obj3.login()
console.log('obj1 === obj3', obj1 === obj3);