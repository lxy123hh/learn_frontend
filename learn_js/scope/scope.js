//作用域，es2015前只有全局作用域和函数作用域
//es2015后增加了一个块级作用域
// 1.全局作用域
a = 1
//var 声明全局变量
// 2. 函数作用域
function fn() {
    var b = 2
}

// 3.块级作用域，用const和let声明
{
    let c = 1
    const e = 3
    {
        let d = 2
    }
    // console.log(d)
    console.log(c)
    console.log(e)
}