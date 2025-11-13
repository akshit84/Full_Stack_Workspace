// 8. Use reduce() on [1, 2, 3, 4] to calculate the product (multiplication of all elements).

const arr = [1, 2, 3, 4]

const output = arr.reduce((sum, item) => {
    return sum = sum * item
}, 1);

console.log("The multiplication of each array element is:- " + output);