let { SyncWaterfallHook } = require('tapable')
// waterfall 瀑布
class Lesson {
  constructor() {
    this.hooks = {
      arch: new SyncWaterfallHook(['name'])
    }
  }
  tap() { // 注册监听函数
    this.hooks.arch.tap('node', function (name) {
      console.log('node', name)
      // return '想停止学习'
      return 'node学得还不错' // 返回undefined 继续往下走，否则停止
    })
    this.hooks.arch.tap('react', function (data) {
      console.log('react', data)
    })
  }
  start() {
    this.hooks.arch.call('jw') // 调用把jw传到 this.hooks.arch.tap的第二个回调函数的name
  }
}

let l = new Lesson()
l.tap() // 注册两个事件
l.start() // 启动钩子