class SyncBillHook { // 钩子是同步的  Bill是保险的意思
  constructor(args) { // agrs: ['name']
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    let ret; // 当前这个函数的返回值
    let index = 0 // 当亲要执行函数的的下标
    do {
     ret = this.tasks[index++](...args)
    } while(ret === undefined && index < this.tasks.length)
  }
}

let hook = new SyncBillHook(['name'])
hook.tap('react', function (name) {
  console.log('react', name)
  // return '想停止学习'
  return undefined // 返回undefined 继续往下走，否则停止
})

hook.tap('node', function (name) {
  console.log('node', name)
})

hook.call('jw') // 可以传多个