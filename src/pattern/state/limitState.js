/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 22:15:42
 * @Description: 有限状态机：收藏和取消收藏，在index.js文件中导入执行
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 22:35:36
 * @LastEditorsDescription:
 */
import $ from "jquery"
import StateMachine from "javascript-state-machine"

const state_collect = '收藏'
const state_cancelCollect = '取消收藏'

let fsm = new StateMachine({
  init: state_collect,
  transitions: [
    {
      name: 'collect',
      from: state_collect,
      to: state_cancelCollect
    },
    {
      name: 'cancelCollect',
      from: state_cancelCollect,
      to: state_collect
    }
  ],
  methods: {
    onCollect() {
      console.log(state_collect)
      updateText()
    },
    onCancelCollect() {
      console.log(state_cancelCollect)
      updateText()
    },
  }
})

let $btn = $('#btn')

const updateText = () => $btn.text(fsm.state)
updateText()

$btn.click(() => fsm.is(state_collect) ? fsm.collect() : fsm.cancelCollect())