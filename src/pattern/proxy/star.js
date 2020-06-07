/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 23:11:21
 * @Description: 明星和经纪人
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 23:17:44
 * @LastEditorsDescription:
 */
const star = {
  name: 'bamboo',
  age: 18,
  phone: '18888888888'
}

const agent = new Proxy(star, {
  get(target, key) {
    switch(key) {
      case 'phone':
        return 'agent phone: 12341234223'
      case 'price':
        return 100000000
      default:
        return target[key]
    }
  },
  set(target, key, val) {
    switch (key) {
      case "customPrice":
        if (val < 10000000) {
          throw new Error('价格太低')
        }
        target[key] = val
        return true

      default:
        break;
    }
  }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 10000000
console.log('agent.customPrice', agent.customPrice);

