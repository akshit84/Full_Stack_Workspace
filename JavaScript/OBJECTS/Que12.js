// 12. Write a function that takes an object and returns an array of its keys.

const myObj1 = {
    "name": "Douglas Adams",
    "email": "douglas@gmail.com",
    "postcode": "pe22 22a",
    "phoneNumber": "07428233312",
    "city": "London",
    "country": "England",
    "favouriteQuote": "The answer is 42"
}

console.log(Object.getOwnPropertyNames(myObj1));
