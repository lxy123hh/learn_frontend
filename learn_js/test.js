function createCounter() {
  let count = 0;  // 私有变量
  return {
    increment: () => {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();  // 输出: 1
counter.increment();  // 输出: 2
counter.decrement();  // 输出: 1
console.log(counter.getCount());  // 输出: 1
