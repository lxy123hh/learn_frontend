const set = new Set()
set.add(1)
set.add(1)
set.add(1)
set.add(2)
console.log(set)

const arr = [1,2,2,2,2,2,3]
const set1 = new Set(arr)
const arr2 = Array.from(set1)
console.log(arr2)

let arr3 = [1, 2, 3, 4, 5, 1, 2];
let uniqueArr = [...new Set(arr3)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]