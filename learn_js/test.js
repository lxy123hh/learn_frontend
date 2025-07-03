let map = new Map([
  ['name', 'Tom'],
  ['age', 25],
  ['job', 'developer']
]);
map.set('age','25')
console.log(map); // This will throw an error because 'map' is not defined in this scope