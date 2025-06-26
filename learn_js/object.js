// 创建，属性读取修改删除
// 1.对象类型时引用类型
// 2.创建对象
var obj = {
    name:'zzz',
    age:'18'
 } //简单对象
 //增加属性
 obj.sex='n'
 //读取属性
console.log(obj.name)
console.log(obj['age'])
//设置属性
obj.name='hhh'
//删除属性
delete obj.name

var str = 'ds'
obj[str] = 'sadf'  
console.log(obj)

// symbol对象
var key = Symbol('key')
obj[key] = 'this is symbol'
//取值
console.log(obj[key])

//私有属性，设定一个symbol对象，但不给key变量，这个属性谁也无法获取
//面向对象编程，封装（数据、方法）