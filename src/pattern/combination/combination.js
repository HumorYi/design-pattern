/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 00:02:28
 * @Description: 组合模式：生成树形结构，表示 “整体 - 部分” 关系，
 *  整体和部分的数据结构和操作是一致的
 *  例如：虚拟 Dom 中的 vnode 是这种形式，但是数据类型简单
 *  设计原则验证：将整体和部分的操作抽象处理，符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 00:08:41
 * @LastEditorsDescription:
 */

const vnode = {
  tag: 'div',
  attr: {
    id: 'div1',
    className: 'container'
  },
  children: [
    {
      tag: 'p',
      attr: {},
      children: [ '123' ]
    },
    {
      tag: 'p',
      attr: {},
      children: [ '456' ]
    },
  ]
}