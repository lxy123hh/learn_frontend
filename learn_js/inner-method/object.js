//1.assign
const target = {
    name : 1,
    age : 2
}

const source = {
    name : 3,
    age : 4
}
const result = Object.assign(target, source) //把source的属性复制到target中，返回target
console.log(result) //{ name: 3, age: 4 }，target被修改了，source不变
console.log(target) //{ name: 3, age: 4 }，target被修改了，source不变

//2.entries
const result1 = Object.entries(target) //把对象转换成数组，返回一个二维数组
console.log(result1) // [ [ 'name', 3 ], [ 'age', 4 ] ]
result1.forEach(function(item) {
    return '${item[0]} : ${item[1]}' //打印每个属性名和属性值
})

//3.freeze 方法,冻结对象，不能修改对象的属性值
const obj = { name: 'Tom' };
Object.freeze(obj); // 冻结对象
obj.name = 'Jerry'; // 尝试修改属性值
// console.log(obj.name); // Tom，属性值没有被修改
// obj.age = 18; // 尝试添加新属性

//4.keys 方法,返回对象的所有属性名
const result2 = Object.keys(target) //返回对象的所有属性名，返回一个数组
console.log(result2) //['name', 'age']
//5.values 方法,返回对象的所有属性值
const result3 = Object.values(target) //返回对象的所有属性值，返回一个数组
console.log(result3) //[ 3, 4 ]