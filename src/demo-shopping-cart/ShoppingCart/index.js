/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 21:43:15
 * @Description: 购物车
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 22:51:05
 * @LastEditorsDescription:
 */

import $ from 'jquery'
import getCart from "../Cart";

export default class ShoppingCart {
  constructor(app) {
    this.app = app
    this.$el = $('<div>').css({
      'padding-bottom': '10px',
      'border-bottom': '1px solid #ccc'
    })
    this.cart = getCart()
  }

  init() {
    this.initBtn()
    this.render()
  }

  initBtn() {
    let $btn = $('<button>购物车</button>')

    $btn.click(() => this.showCart())

    this.$el.append($btn)
  }

  showCart() {
    console.log('当前购物车未：')
    console.log(this.cart.getList())

    return this.cart.getList()
  }

  render() {
    this.app.$el.append(this.$el)
  }
}