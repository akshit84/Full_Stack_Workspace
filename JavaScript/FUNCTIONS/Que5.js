// 5. Write a function that takes an array and returns the maximum value.

function maximumNumber(array) {
    let max_number = 0

    array.forEach(num => {
        if(num > max_number){
            max_number = num
        }
    });
    return max_number
}

const myArr = [15, 482, 533, 1, 240]
console.log("The maximum number is:-",maximumNumber(myArr));
