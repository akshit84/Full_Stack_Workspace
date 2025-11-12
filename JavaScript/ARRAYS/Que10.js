// 10. Write a function that filters out all even numbers from an array.

const myArr = [23, 51, 80, 47, 38, 25, 43, 56]
let evenNumberArray = []

myArr.forEach(element => {
    if (element % 2 === 1) {
        evenNumberArray.push(element)
    }
});
console.log("The even number array is:- ",evenNumberArray);

