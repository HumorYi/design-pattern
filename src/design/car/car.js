/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 12:44:13
 * @Description: 打车 => 要求：画出UML图和使用ES6实现
 *		打车时，可以打专车或者快车，任何车都有车牌号和名称；
			不同车价格不同，快车每公里1元，专车每公里2元；
			行程开始时，显示车辆信息
			行程结束时，显示打车金额（假定行程就5公里）
 */


class Car {
	constructor(name, number) {
		this.name = name
		this.number = number
	}
}

class ExpressCar extends Car {
	constructor(name, number) {
		super(name, number)
		this.price = 1
	}
}

class SpecialCar extends Car {
	constructor(name, number) {
		super(name, number)
		this.price = 2
	}
}

class Trip {
	constructor(car) {
		this.car = car
	}

	start() {
		console.log(`行程开始，车名称为：${this.car.name}，车牌号为：${this.car.number}`)
	}

	end(kilometer) {
		console.log(`行程结束，价格为：${this.car.price * kilometer}元`)
	}
}

const expressCar = new ExpressCar('快车', '123')
const expressCarTrip = new Trip(expressCar)
expressCarTrip.start()
expressCarTrip.end(5)

const specialCar = new SpecialCar('专车', '456')
const specialCarTrip = new Trip(specialCar)
specialCarTrip.start()
specialCarTrip.end(5)