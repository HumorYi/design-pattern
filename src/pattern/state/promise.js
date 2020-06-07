/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 22:30:46
 * @Description: 实现一个简单的promise，在index.js中执行
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 22:56:09
 * @LastEditorsDescription:
 */

import StateMachine from "javascript-state-machine"

const state_init = 'pending'
const state_resolve = 'fullfilled'
const state_reject = 'rejected'

let fsm = new StateMachine({
  init: state_init,
  transitions: [
    {
      name: 'resolve',
      from: state_init,
      to: state_resolve
    },
    {
      name: 'reject',
      from: state_init,
      to: state_reject
    }
  ],
  methods: {
    onResolve(state, data) {
      console.log('resolve')
      data.successList.forEach(fn => fn())
    },
    onReject(state, data) {
      console.log('reject')
      data.failList.forEach(fn => fn())
    }
  }
})

class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []

    fn(() => {
      fsm.resolve(this)
    }, () => {
      fsm.reject(this)
    })
  }

  then(successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }
}

const loadImg = src => new MyPromise((resolve, reject) => {
  const img = document.createElement('img')
  img.onload = () => resolve(img)
  img.onerror = () => reject('load fail')
  img.src = src
})

const src = 'https://www.imooc.com/static/img/index/logo.png'
const result = loadImg(src)

result.then(img => {
  console.log('success1')
}, err => {
  console.log('fail1')
})

result.then(img => {
  console.log('success2')
}, err => {
  console.log('fail2')
})