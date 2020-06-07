/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 22:59:57
 * @Description: 日志处理
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 23:09:12
 * @LastEditorsDescription:
 */

export default type => (target, name, descriptor) => {
  let oldValue = descriptor.value

  descriptor.value = function () {
    console.log(`日志上报：${type}`)

    return oldValue.apply(this, arguments)
  }

  return descriptor
}