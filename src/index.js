/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-23 23:42:18
 * @Description:
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 21:26:27
 * @LastEditorsDescription:
 */
/* class Person {
	constructor(name) {
		this.name = name
	}
	getName() {
		return this.name
	}
}

let person = new Person('bamboo')
console.log(person.getName()) */


// import './pattern/decorator/es7-decorator'
// import './pattern/decorator/plugin-core-decorators'
// import './pattern/state/limitState'
// import './pattern/state/promise'

// demo - code
import App from "./demo-shopping-cart/App"
const app = new App('#app')
app.init()