// 11. Convert an array of key-value pairs like [["id", 1], ["name", "Alex"]] into an object using JavaScript methods.
//    const users = [
//      ["Alice", 25],
//      ["Bob", 30],
//      ["Charlie", 22]
//    ];

const users = [
    ["Alice", 25],
    ["Bob", 30],
    ["Charlie", 22]
];

// const arr = Object.entries(users);
const person = users.reduce((acc,entry) => {
    const[names, id] = entry
    acc = ["name", names,"id", id]
    return acc
},[])

console.log(person);

