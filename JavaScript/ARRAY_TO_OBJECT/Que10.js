// 10. Convert ["name", "age", "city"] and ["John", 25, "New York"] into an object: {name: "John", age: 25, city: "New York"}.

const key = ["name", "age", "city"]
const values = ["John", 25, "New York"]

const person = key.reduce((obj, key, index) => {
    obj[key] = values[index]
    return obj
},{})
console.log(person);

