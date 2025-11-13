// 22. Write a function that takes an array of objects (each with name and age) and returns the name of the oldest person.

const userData = [
    {firstname: "Akshit Bhadesiya",  age: 22},
    {firstname: "Trump Donald", age: 75},
    {firstname: "Elon Musk", age: 50},
    {firstname: "Deepika Padukone", age: 32},  
]

const output = userData.reduce((old, curr) => {
    if (curr.age > old.age) {
        return curr
    }
    else
        return old
}).firstname;
console.log(output);


// const output = userData.filter((user) => {
//     return 
// })
// .map((user) => {user.firstname})