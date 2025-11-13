// 5. You have an array of names: ["John", "Sarah", "Alex", "Steve"]. Use filter() to return names starting with “S”.

const names = ["John", "Sarah", "Alex", "Steve"]
const Regex = /s/gi
const output = names.filter((item) => {
    return item.match(Regex)
})
console.log(output);
