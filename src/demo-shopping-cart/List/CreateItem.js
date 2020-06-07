/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 22:20:53
 * @Description: 工产模式：对Item构造函数进行封装
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 22:55:38
 * @LastEditorsDescription:
 */

import Item from "./item"

const createDiscount = itemData => new Proxy(itemData, {
  get(target, key, receiver) {
    switch (key) {
      case 'name':
        return `${target[key]} 【折扣】`
      case 'price':
        return target[key] * 0.8
      default:
        return target[key]
    }
  }
})

export default (list, itemData) => {
  if (itemData.discount) {
    itemData = createDiscount(itemData)
  }

  return new Item(list, itemData)
}