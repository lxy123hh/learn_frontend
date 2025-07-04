class Persion {
    constructor(name , age) {
        //构造函数中仅放属性
        //属性是公开的
        this.name= name;
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

class Student extends Persion {
    constructor(name, age, school) {
        //调用父类的构造函数，若父类中有构造函数，子类必须调用父类的构造函数
        super(name, age);//调用父类的构造函数
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    setSchool(school) {
        this.school = school;
    }
}

const s1 = new Student('张三', 18, '清华大学');
const s2 = new Persion('李四', 19);
console.log(s1);
console.log(s2);