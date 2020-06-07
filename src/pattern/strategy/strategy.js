/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 00:21:07
 * @Description: 策略模式：不同策略分开处理，避免出现大量 if..else 或 switch..case
 *  设计原则验证：不同策略，分开处理，而不是混合在一起，解决代码可维护性和可读性，
 *    符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 00:25:57
 * @LastEditorsDescription:
 */

class OrdinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}

class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}

class VipUser {
  buy() {
    console.log('vip 用户购买')
  }
}

const ordinaryUser = new OrdinaryUser()
ordinaryUser.buy()

const memberUser = new MemberUser()
memberUser.buy()

const vipUser = new VipUser()
vipUser.buy()