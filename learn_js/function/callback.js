//回调函数，和api没有任何关系，和异步没有任何关系
//函数作为参数传给另一个函数


//platform平台api
//我们自己传递的函数
function platform(/*a变量要传递一个函数*/a) {
    a(1,2,3);
}

//回调函数，被一个第三方的函数调用
const fn = function(a,b,c) {
    console.log(a,b,c)
}
//作为参数传递给第三方api
platform(fn)

//第三方的api不通过return返回值，而是通过回调函数的参数传递返回值
