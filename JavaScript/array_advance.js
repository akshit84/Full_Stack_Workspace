const numbers = [1, 2, 3, 4, 5]

// map in javascript
// map generally takes a callback function and apply callback function on each element of an array and return result in new array
// sort term is transformation an entire array
numbers.map((item, index, array) => {
    return item + 5;
})
// console.log(newNums);


function double(num) {
    return num * 2;
}

function binary(num) {
    return num.toString(2);
}

numbers.map((num) => num.toString(2))
// console.log(output);


// filter in javascript
// filter is same as map the only difference is it takes condition and return those element which satisfy condition
numbers.filter((item, index, array) => {
    return item > 3;
})

// reduce in javascript

const arr = [4, 6, 8, 9, 2, 3, 15]

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
// console.log(findMax(arr));

const output = arr.reduce(function(max, curr) {
    if(curr > max){
        max = curr
    }
    return max
},0)
// console.log(output);


// ----------------------------------------------------------------------
// Exercise of map,filter and reduce

const userData = [
    {firstname: "Akshit", lastname: "Bhadesiya", age: 22},
    {firstname: "Trump", lastname: "Donald", age: 75},
    {firstname: "Elon", lastname: "Musk", age: 50},
    {firstname: "Deepika", lastname: "Padukone", age: 32},
    {firstname: "Het", lastname: "Gajjar", age: 22},
]

const result = userData.map((x) => x.firstname + " " + x.lastname)
// // console.log(result);

const result1 = userData.reduce((count, curr) => {
    if(count[curr.age])
    {
        count[curr.age] = ++count[curr.age]
    }
    else{
        count[curr.age] = 1
    }
    return count;
}, {})
// console.log(result1);

// first name of all people whose age is less than 30 

const result2 = 
userData.filter((user) => user.age<30)
.map((user) =>user.firstname)

// console.log(result2);

const result3 = userData.reduce((acc, user) => {
    // console.log();
    if(user.age < 30){
        // console.log(user.firstname);
        acc.push(user.firstname)    
    }
    return acc
},[])
console.log(result3);







// some in javascript
// some is quite simillar to filter but the thing is when we apply condition into filter it's going to return every single item that satisfy the condition but in the case of some it's either return true or false
numbers.some((item, index, array) => {
    return item > 3;
})
// console.log(newNums);

// every in jvascript
// every checks for every element of an array if condition passes then it return ture otherwise it return false
numbers.every((item, index, array) => {
    return item > 3;
})

// find in javascript
// When condition apply on first element of an array it passes it return true otherwise undefined
const newNums = numbers.find((item, index, array) => {
    return item > 3;
})
// console.log(newNums);

// Spread and rest operators
const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8]

const final_num = [...nums1, ...nums2] //Spread Operator
// console.log(final_num);

// while we have function and function take one params but we don't know how many params are provided to us then rest work

function display(...number) {
    return number;
}
// console.log(display(nums1, nums2, "hello world"));

