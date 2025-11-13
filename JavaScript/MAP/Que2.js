// 2. You have an array of strings: ["apple", "banana", "cherry"]. Use map() to return an array of objects like this: 
//    [{fruit: "apple"}, {fruit: "banana"}, {fruit: "cherry"}].

const fruits = ["apple", "banana", "cherry"]

const output = fruits.map((item) => {
    return ({["fruit"]:item })
});
console.log(output);
