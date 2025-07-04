class Base {
    constructor() {
        //构造函数中仅放属性
        this.name = 'lxy';
        this.age = 18;
    }
    //方法
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}
const base = new Base();
console.log(base.getName()); // lxy
base.setName('lxy2');
console.log(base.getName()); // lxy2
