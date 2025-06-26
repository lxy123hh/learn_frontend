
const a = 1

a = 2

const obj = { name: 'Tom' };

obj.name = 'Jerry';  // ✅ 可以修改属性
console.log(obj.name); // Jerry

obj = {}; // ❌ 报错：Assignment to constant variable.