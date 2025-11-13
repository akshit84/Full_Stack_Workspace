//23. Write a function that takes a string and returns an object with counts of each character.

const str = "HelloGrapesBananaWatermealonTeaOrange"

const output = str.split('').reduce((count, char) => {
    // // console.log(count[char]);
    // if (count[char]) {
    //     count[char] += 1
    // }
    // else {
    //     count[char] = 1
    // }
    // return count
    
    count[char] = count[char] ? count[char] + 1 : 1
    return count
}, {})

console.log(output);
