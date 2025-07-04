class Person {
    // 私有字段
    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;  // 通过构造函数初始化私有字段
    }

    // 公共方法来访问私有字段
    getAge() {
        return this.#age;
    }

    // 公共方法来设置私有字段
    setAge(age) {
        if (age < 0) {
            console.log('Age cannot be negative');
        } else {
            this.#age = age;
        }
    }
}

const person = new Person('Alice', 30);
console.log(person.name);  // Alice
console.log(person.getAge());  // 30

person.setAge(35);
console.log(person.getAge());  // 35

// 直接访问私有字段会报错
// console.log(person.#age);  // SyntaxError: Private field '#age' must be declared in an enclosing class