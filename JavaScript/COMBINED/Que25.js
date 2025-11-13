//25. Write a function that takes an array of numbers and returns an object with "even" and "odd" keys separating the numbers.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function numbersEvenOdd(arr) {
    let even = []
    let odd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            even.push(arr[i])
        }
        else {
            odd.push(arr[i])
        }

    }
    // return console.log(`Even number is ${even}\nOdd number is ${odd} `);
    return console.log(JSON.stringify(even,odd));
    
    
}
numbersEvenOdd(arr)

