/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 22:11:44
 * @Description: 商品项
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 23:04:11
 * @LastEditorsDescription:
 */

import $ from 'jquery'
import StateMachine from 'javascript-state-machine'

import getCart from "../Cart";
import log from "../utils/log";

export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart = getCart()
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }

  initContent() {
    let data = this.data
    this.$el.append($(`<p>名称：${data.name}</p><p>价格：${data.price}</p>`))
  }

  initBtn() {
    let $btn = ($(`<button>`))

    let state_add = '加入购物车'
    let state_del = '从购物车删除'

    let fsm = new StateMachine({
      init: state_add,
      transitions: [
        {
          name: 'addToCart',
          from: state_add,
          to: state_del
        },
        {
          name: 'deleteFromCart',
          from: state_del,
          to: state_add
        }
      ],
      methods: {
        onAddToCart: () => {
          this.addToCartHandle()
          updateText()
        },
        onDeleteFromCart: () => {
          this.deleteFromCartHandle()
          updateText()
        },
      }
    })

    let updateText = () => $btn.text(fsm.state)

    $btn.click(() => fsm.is(state_add) ? fsm.addToCart() : fsm.deleteFromCart())

    updateText()
    this.$el.append($btn)
  }

  @log('add')
  addToCartHandle() {
    this.cart.add(this.data)
  }

  @log('del')
  deleteFromCartHandle() {
    this.cart.del(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }
}