/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 11:03:07
 * @Description: 观察者模式 => Promise
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 22:39:54
 * @LastEditorsDescription:
 */


const loadImg = src => new Promise((resolve, reject) => {
  const img = document.createElement('img')
  img.onload = () => resolve(img)
  img.onerror = () => reject('load fail')
  img.src = src
})

const src = 'https://www.imooc.com/static/img/index/logo.png'
loadImg(src).then(img => {
  console.log('width', img.width)
  return img
})
.catch(err => {
  console.log('error', err)
})