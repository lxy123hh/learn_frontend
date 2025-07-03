const arr = [1, 2, 3, 4, 5];
const arr1 = [{name: 1}, {name: 2}, {name:3}];

const callback = function(a, arr) {
  console.log(a, arr);
}
arr.forEach(callback);