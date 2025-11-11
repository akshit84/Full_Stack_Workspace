// ARRAY -> An Array is an object type designed for storing data collections. 
// --> (const arr) It does NOT define a constant array. It defines a constant reference to an array.
const myArr =[1,2,3,4,5 ]
const fruits = ["Apple", "Banana", "Orange"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift() 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // add existing array into new one and converted new array into string
// console.log(typeof newArr);
// console.log(myArr);

//slice, sp/ice
// SLICE -> The result of slice is it not include range but main key difference is slice do not change main array
// SPLICE -> While the result of splice is it include range but splice manipulate main array it remove portion of splice element
// toSpliced -> The result of toSpliced is it return those element which are not in range

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);


console.log("B", myArr);
const myn2 = myArr.toSpliced(1, 3)
console.log(myn2);


console.log("C", myArr);
const myn3 = myArr.splice(1, 3)
console.log(myn3);
console.log(myArr);