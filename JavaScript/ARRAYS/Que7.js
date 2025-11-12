// 7. Write a function that removes duplicates from an array.

const myArr = ["Apple", "Tea", 1, 2, 4,  "Banana", "Orange", "Orange", "Coffee", "Tea",2]
let newArr = []
myArr.forEach(element => {
    if (!newArr.includes(element)) {
        newArr.push(element);
    }
});
console.log("The Original array is:- ",myArr);
console.log("The Array without duplicates value:- ",newArr);


