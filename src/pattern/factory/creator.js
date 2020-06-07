/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 19:07:53
 * @Description: 工厂模式：将new操作单独封装，遇到new时，就要考虑是否该使用工厂模式
 *  意义：封装实现，只返回创建方式，保护实际代码
 *  例如：购买汉堡，直接点餐、取餐，不会自己做，商店做封装汉堡的工作，做好直接给买者
 *  设计原则验证：构造函数和创建者分离，符合开发封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 21:32:20
 * @LastEditorsDescription:
 */
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('init');
  }
  fn() {
    console.log('fn');
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

const creator = new Creator()
const product = creator.create('car')
product.init()
product.fn()