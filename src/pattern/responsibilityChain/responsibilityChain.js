/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 00:31:14
 * @Description: 职责链模式：一步操作可能分为多个职责角色完成，
 *  把这些角色分开，然后用一个链串起来，将发起者和各个处理者进行隔离
 *  例如：请假审批，需要组长审批、经理审批、最后总监审批
 *  场景（链式操作）：js、jQuery、Promise.then、nodeJS Stream.pipe
 *  设计原则验证：符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 00:39:59
 * @LastEditorsDescription:
 */

class Action {
  constructor(name) {
    this.name = name
    this.nextAction = null
  }

  setNextAction(action) {
    this.nextAction = action
  }

  handle() {
    console.log(`${this.name} 审批`)
    this.nextAction && this.nextAction.handle()
  }
}

const a1 = new Action('组长')
const a2 = new Action('经理')
const a3 = new Action('总监')
a1.setNextAction(a2)
a2.setNextAction(a3)
a1.handle()