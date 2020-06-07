/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 22:05:06
 * @Description:
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 22:09:46
 * @LastEditorsDescription:
 */
class Cart {
  constructor() {
    this.list = []
  }

  add(data) {
    this.list.push(data)
  }

  del(id) {
    this.list = this.list.filter(item => item.id !== id)
  }

  getList() {
    return this.list.map(item => item.name).join('\n')
  }
}

let getCart = (() => {
  let cart = null

  return () => {
    if (!cart) {
      cart = new Cart()
    }

    return cart
  }
})()

export default getCart