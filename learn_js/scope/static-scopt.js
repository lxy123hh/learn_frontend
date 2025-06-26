//所有定义的变量binding，按照词法作用域进行（程序还未执行）
//动态作用域，变量的binding，在执行阶段才进行
//js没有动态作用域，只有静态作用域

let x =10

function test(){
    console.log(x)
}

function main(){
    let x =20
    test()
}

main()