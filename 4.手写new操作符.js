/*
new 关键字会进行如下的操作：

创建一个新的对象
继承父类原型上的方法.
添加父类的属性到新的对象上并初始化. 保存方法的执行结果.
如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象。
*/
function _new(constructor, ...rest) {
    //判断参数是否是一个函数
    if (typeof constructor !== 'function') {
        console.log('type error')
        return
    }
    // 基于obj的原型创建一个新的对象
    const newObj = Object.create(constructor.prototype);

    // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
    const result = constructor.apply(newObj, rest);
    // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
    return result instanceof Object ? result : newObj;
}


function Person(firtName, lastName) {
    this.firtName = firtName;
    this.lastName = lastName;
}
const preson = _new(Person, 'Zhang', 'San')
console.log(preson)

function Person2(firtName, lastName) {
    this.firtName = firtName;
    this.lastName = lastName;
    return {
        fullName: `${this.firtName} ${this.lastName}`
    };
}
const preson2 = _new(Person2, 'Zhang', 'San')
console.log(preson2)