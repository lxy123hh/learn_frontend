//变量提升问题

var a = 1
function test(){
    console.log(a)
    var a = 2
}

test()