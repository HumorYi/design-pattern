/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 21:21:38
 * @Description: 应用程序
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 22:40:37
 * @LastEditorsDescription:
 */

import $ from "jquery"
import ShoppingCart from "./ShoppingCart"
import List from "./List"

export default class App {
  constructor(selector) {
    this.$el = $(selector)
  }

  init() {
    this.initShoppingCart()
    this.initList()
  }

  initShoppingCart() {
    let shoppingCart = new ShoppingCart(this)
    shoppingCart.init()
  }

  initList() {
    let list = new List(this)
    list.init()
  }
}