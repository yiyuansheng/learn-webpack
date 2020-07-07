let { AsyncParallelHook } = require('tapable')
// 异步的钩子 （串行和并行） 并行需要等待所有并发的异步事件执行后再执行回调方法
// 提示发送多个请求
// 注册方法分为 tap / tapAsync
class Lesson {
  constructor() {
    this.index = 0
    this.hooks = {
      arch: new AsyncParallelHook(['name'])
    }
  }
  tap() { // 注册监听函数
    this.hooks.arch.tapAsync('node',  (name, cb) => {
      setTimeout(() => {
        console.log('node', name)
        cb()
      }, 1000)
    })
    this.hooks.arch.tapAsync('react', (data, cb) => {
      setTimeout(() => {
        console.log('react', data)
        cb()
      }, 1000)
    })
  }
  start() {
    this.hooks.arch.callAsync('jw', function () {
      console.log('end')
    }) // 调用把jw传到 this.hooks.arch.tap的第二个回调函数的name
  }
}

let l = new Lesson()
l.tap() // 注册两个事件
l.start() // 启动钩子