function persion() {
    this.name = 'persion';
    this.age = 18;
    this.getName = function() {
        console.log(this.name);
    };
}
const p1 = new persion();
console.log(p1);   //persion { name: 'persion', age: 18 }
p1.getName();  // 输出: persion 