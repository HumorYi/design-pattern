/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 00:27:03
 * @Description: 模板方法模式：把多个方法合并在一个方法中，使用方法模板调用多个方法
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 00:30:11
 * @LastEditorsDescription:
 */

class Action {
  handle() {
    this.handle1()
    this.handle2()
    this.handle3()
  }

  handle1() {
    console.log('handle1')
  }

  handle2() {
    console.log('handle2')
  }

  handle3() {
    console.log('handle3')
  }
}

const action = new Action()
action.handle()