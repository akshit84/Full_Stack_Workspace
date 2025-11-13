// 16. Write a function that counts how many vowels are in a string.
string.replace(/ /g, "-");
const vowel = ["a", "e", "i", "o", "u"]
function vowel_count(string) {
    // console.log(string);
    const lower_string = string.toLowerCase()
    // console.log("lower", lower_string);

    let count = 0

    for (let i = 0; i < string.length; i++) {

        // console.log(vowel);
        // console.log(lower_string[i]);

        // console.log(vowel.includes(lower_string[i]));

        if (vowel.includes(lower_string[i])) {

            count++;
        }
        // console.log(count);



    }
    return console.log(`There are ${count} vowel in given string`);


}

const string = prompt("Enter string:- ")
vowel_count(string)

// const result = vowel_count(string)
// console.log(result);



