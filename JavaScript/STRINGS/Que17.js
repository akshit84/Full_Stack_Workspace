// 17. Write a function that reverses a string.
const prompt = require("prompt-sync")();

function reverse_string(str) {
    
    const str_len = string.length    
    let stored_str = []

    for (let i = str_len - 1; i >= 0; i--) {
        stored_str += str[i];
    }
    return console.log("The reverse string is:- ", stored_str);
}

const string = prompt("Enter String:- ");


reverse_string(string)