/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 22:51:15
 * @Description: 代理模式：使用者无权访问目标对象，中间加代理，通过代理做授权和控制
 *  例如：科学上网、明星经纪人，$.proxy、es6 proxy
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 22:59:45
 * @LastEditorsDescription:
 */
class RealImg {
  constructor(filename) {
    this.filename = filename
    this.loadFromDisk()
  }

  display() {
    console.log('display ...')
  }

  loadFromDisk() {
    console.log('loading from disk ...' + this.filename)
  }
}

class ProxyImg {
  constructor(filename) {
    this.realImg = new RealImg()
  }

  display() {
    this.realImg.display()
  }
}

let proxyImg = new ProxyImg()
proxyImg.display()
