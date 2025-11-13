// 3. Given an array of user objects: 
//    const users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
//    Use map() to create a new array of formatted strings: 
//    ["Alice is 25 years old", "Bob is 30 years old"]

const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];

const output = users.map((item) => {
    return (item.name + " is "+ item.age+" years old" )
})

console.log(output);

