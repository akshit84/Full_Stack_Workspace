// 12. Convert it into an object with names as keys and ages as values.
// const users = [
//   ["Alice", 25],
//   ["Bob", 30],
//   ["Charlie", 22]
// ];

// { Alice: 25, Bob: 30, Charlie: 22}
const users = [
  ["Alice", 25],
  ["Bob", 30],
  ["Charlie", 22]
];

const obj1 = Object.fromEntries(users)

console.log(obj1);

