let arr = [1, 2, 3, 4, 5];
arr.forEach(function (item) {
    console.log(item);
});

arr.forEach((item,index) => {
    console.log(index,item);
})