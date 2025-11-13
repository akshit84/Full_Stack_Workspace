// 7. Given [1, 2, 3, 4], use reduce() to find the sum of all numbers.

const arr = [1, 2, 3, 4]

const output = arr.reduce((sum, item) => {
    return sum = sum + item
}, 0);

console.log("The sum of above array element is:- " + output);
