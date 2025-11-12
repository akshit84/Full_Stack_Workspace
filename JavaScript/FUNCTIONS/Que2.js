// 2. Write a function that checks if a number is even or odd.

function evenAndOdd(a) {
    if (a % 2 === 0) {
        return console.log(`The number ${a} is even.`)
    }
    else {
        return console.log(`The number ${a} is odd.`);
    }
}
evenAndOdd(5)