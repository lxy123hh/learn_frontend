//函数
function add(a, b, c){
    var d = a + b + c
    return d
}

var re = add(1,2,3)
console.log(re)

//函数重载，同一个函数名的函数，会因为函数的参数和类型的不同而执行不同的逻辑，js中无，叫函数的覆盖