/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 13:15:01
 * @Description: 停车场 => 要求：画出UML图和使用ES6实现
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 15:35:27
 * @LastEditorsDescription:
 */

class Park {
  // 需要传递停车场楼层信息，例如：第几层，有多少停车位
  constructor(floorInfo = []) {
    this.floors = []
    this.emptyNum = 0

    floorInfo.forEach(({ index, placeNum }) => {
      this.emptyNum += placeNum

      const places = []

      for (let i = 0; i < placeNum; i++) {
        places.push(new Place())
      }

      this.floors.push(new Floor(index, places))
    })

    this.camera = new Camera()
    this.screen = new Screen()
    this.carList = new Map()
  }

  before() {
    console.log(`该停车场有：${this.emptyNum} 个空车位`);

    return this.emptyNum
  }

  // 显示每层空闲车位
  detail() {
    /* const parkInfo = new Map()

    this.floors.forEach(floor => {
      parkInfo.set(floor.index, floor.info())
    }

    return parkInfo */

    this.floors.forEach(floor => {
      const info = floor.info()
      console.log(`第 ${floor.index} 层还有 ${info.emptyNum} 个空车位，可停车位置号码为：`, ...info.emptyPositions)
    })
  }

  in(car, floorIndex, placeIndex) {
    const place = this.floors[floorIndex - 1].places[placeIndex - 1]

    if (!place.empty) {
      console.log(`抱歉，第 ${floorIndex} 层 第 ${placeIndex} 号车位已停车了，请停其它车位，谢谢合作！`)

      return '抱歉，该车位已停车了，请停其它车位，谢谢合作！'
    }

    place.in()
    const info = this.camera.shot(car)
    info.place = place
    info.floorIndex = floorIndex
    info.placeIndex = placeIndex
    this.carList.set(car.num, info)
    this.emptyNum--

    console.log(`车号码为：${car.num} 停在第 ${floorIndex} 层第 ${placeIndex} 号车位`)
  }

  out(car) {
    const info = this.carList.get(car.num)
    const place = info.place
    place.out()
    this.screen.show(car, info.inTime)
    this.carList.delete(car.num)
    this.emptyNum++

    console.log(`车号码为：${car.num} 从第 ${info.floorIndex} 层第 ${info.placeIndex} 号车位离开`)
  }
}

class Floor {
  constructor(index, places) {
    this.index = index
    this.places = places
  }

  info() {
    const emptyPositions = []
    let emptyNum = this.places.reduce((total, place, index) => {
      if (place.empty) {
        total++
        emptyPositions.push(index + 1)
      }

      return total
    }, 0)

    return {
      emptyNum,
      emptyPositions
    }
  }
}

class Place {
  constructor() {
    this.empty = true
  }

  in() {
    this.empty = false
  }

  out() {
    this.empty = true
  }
}

class Car {
  constructor(num) {
    this.num = num
  }
}

class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now()
    }
  }
}

class Screen {
  show(car, inTime) {
    console.log(`车牌号：${car.num}\n停车时间：${Date.now() - inTime}`)
  }
}

const park = new Park([
  {
    index: 1,
    placeNum: 100
  },
  {
    index: 2,
    placeNum: 200
  },
  {
    index: 3,
    placeNum: 300
  },
])

// 进入之前查看有几个空车位
park.before();
// 查看有每层有几个空车位
park.detail();

const car1 = new Car('123')
// 进入一辆车
park.in(car1, 1, 12)

park.out(car1);

// 进入之前查看有几个空车位
park.before();
// 查看有每层有几个空车位
park.detail();

const car2 = new Car('234')
// 进入一辆车
park.in(car2, 1, 23)

// 进入之前查看有几个空车位
park.before();
// 查看有每层有几个空车位
park.detail();