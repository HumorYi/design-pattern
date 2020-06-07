/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 22:25:45
 * @Description: 使用第三方库：core-decorators
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 22:30:26
 * @LastEditorsDescription:
 */

import { readonly, deprecate } from "core-decorators"

class Person {
  @readonly
  name() {
    return 'humoryi'
  }
  @deprecate('age函数即将废弃')
  age() {}
}

let person = new Person()
console.log(person.name())
// person.name = () => {}
console.log(person.age())