let str = require('./a.js');
console.log(str);

require('./index.css');
require('./index.less');

let fn = () => {
    console.log('log');
};
fn();
@log // 装饰器
class A {
    a = 1
}
let a = new A();
console.log(a.a);

function log(target) {
    console.log(target, '23');
}