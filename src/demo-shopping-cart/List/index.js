/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 21:43:15
 * @Description: 商品列表
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 22:40:08
 * @LastEditorsDescription:
 */

import $ from 'jquery'
import api from "../config/api"
import createItem from './CreateItem'

export default class List {
  constructor(app) {
    this.app = app
    this.$el = $('<div>')
  }

  init() {
    this.loadData()
      .then(data => this.initItemList(data))
      .then(() => this.render())
  }

  loadData() {
    return fetch(api.list).then(data => data.json())
  }

  initItemList(data) {
    data.forEach(itemData => {
      let item = createItem(this, itemData)
      item.init()
    })
  }

  render() {
    this.app.$el.append(this.$el)
  }
}