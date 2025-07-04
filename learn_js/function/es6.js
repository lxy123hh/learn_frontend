class Base {
    constructor(name , age) {
        //构造函数中仅放属性
        this.name = name;
        this.age = age;
    }
    //方法
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}
const base = new Base('lxy', 18);
const base2 = new Base('lxy2', 20);
console.log(base); // lxy
console.log(base2); // lxy2
