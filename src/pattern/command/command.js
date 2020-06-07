/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 01:42:00
 * @Description: 命令模式：执行命令时，发布者和执行者分离，中间加入命令对象作为中转站
 *  例如：网页富文本编辑器操作，浏览器封装一个命令对象: document.execCommand('bold')
 *  设计原则验证：符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 01:49:34
 * @LastEditorsDescription:
 */

class Receiver {
  exec() {
    console.log('执行命令')
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver
  }
  cmd() {
    console.log('触发命令')
    this.receiver.exec()
  }
}

class Invoker {
  constructor(command) {
    this.command = command
  }
  invoke() {
    console.log('发布命令')
    this.command.cmd();
  }
}

const receiver = new Receiver()
const command = new Command(receiver)
const invoker = new Invoker(command)
invoker.invoke()