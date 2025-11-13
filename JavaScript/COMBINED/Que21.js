// 21. Write a function that takes an array of strings and returns the longest string.

const arr = ["Hello", "Banana", "Tea", "Watermealon", "Orange", "Grapes"]

// const output = arr.reduce((acc, index) => {
//     return index.length > acc.length ? index: acc;
// },"")
// console.log(output);


function findLongString(arr) {
    let longestStr = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestStr.length ) {
            longestStr = arr[i]
        }

    }
    return longestStr
}
console.log(findLongString(arr));


