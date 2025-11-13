// 20. Write a function that finds the longest word in a string.
const prompt = require("prompt-sync")();

function findLongWord(userString) {
    const arr = userString.split(' ');
    console.log(arr);

    let longestWord = 0

    console.log(arr[longestWord]);
    // console.log(arr[i].length);
    

    // for (let i = 0; i < arr.length; i++) {
    //     // console.log(arr[i].length);

    //     if (arr[i].length > longestWord) {
    //         longestWord = arr[i]
    //     }
    // }
    // return longestWord
    // return 0;

}
const string = prompt("Enter any string:-")
console.log(findLongWord(string));

