/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 20:59:46
 * @Description: 适配器模式: 旧接口格式和使用者不兼容，中间加一个适配器转换接口
 *  例如：封装旧接口、vue computed
 *  设计原则验证：将旧接口和使用者进行分离，符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 21:34:26
 * @LastEditTime: 2019-08-24 21:34:34
 */

class Adaptee {
  specificRequest() {
    return '德国标准插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} -- 转换器 -- 中国标准插头`
  }
}

let target = new Target()
console.log(target.request())
