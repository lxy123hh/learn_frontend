function outFunction() {
  let a = 10;
  console.log(`a is ${a}`);
  function innerFunction() {
    console.log(a);}
  return innerFunction;
}
outFunction();