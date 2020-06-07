/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 23:25:42
 * @Description: 外观者模式：为子系统中的一组接口提供了一个高层接口给使用者使用
 *  例如：客户需要跟子系统内部的子模块进行交互，逻辑混乱，
 *    封装一个高层接口统一管理用户要与子模块交互的逻辑接口，用户只需要与高层接口交互
 *  设计原则验证：不符合单一职责原则和开发封闭原则，谨慎使用，不可滥用
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 23:33:29
 * @LastEditorsDescription:
 */

const bindEvent = (elem, type, selector, fn) => {
  if (!fn) {
    fn = selector
    selector = null
  }
}

bindEvent(elem, 'click', '#btn', fn)
bindEvent(elem, 'click', fn)