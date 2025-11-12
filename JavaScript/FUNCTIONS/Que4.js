// 4. Write a function that returns the factorial of a number.

function factorial(n) {
    if( n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n -1);
}
factorialNumber = 6
console.log(`The factorial of ${factorialNumber} is :- `,factorial(factorialNumber));
