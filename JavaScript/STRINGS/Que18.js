// 18. Write a function that checks if a string is a palindrome.
const prompt = require("prompt-sync")();

function palindrome(str) {

    let str_len = str.length

    for (let i = 0; i < str_len / 2; i++) {
        if (str[i] !== str[str_len - i - 1]) {
            console.log("The given string is not palindrome.");
            return;
        }
    }
    console.log("The given string is palindrome.")

}
const string = prompt("Enter string:- ")

palindrome(string)