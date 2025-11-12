// 9. Write a function that returns the sum of all numbers in an array.

const myArr = [23, 51, 80, 47, 39, 25, 43, 56]

function sumOfArrayNumber(array) {
    let sum = 0
    array.forEach(element => {
        sum += element
    });    
    return console.log("The sum of all nummbers in array is:- ",sum);
}
console.log(myArr);

sumOfArrayNumber(myArr)