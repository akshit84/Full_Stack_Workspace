// 8. Write a function that reverses an array without using the built-in reverse() method.

const myArr = ["Spiderman", "Thor", 25, "Black Panther", "Ironman", "Flash", 167]
let myArr_length = myArr.length

let reverse_arr = []
for (let i = myArr_length - 1; i >= 0; i--) {
    reverse_arr += myArr[i];
    // console.log(reverse_arr);
    // console.log(typeof reverse_arr);
}
console.log(reverse_arr);

console.log(typeof reverse_arr);
