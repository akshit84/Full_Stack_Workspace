// 15. Write a function that counts how many properties an object has.

const myObj1 = {
    "name": "Douglas Adams",
    "email": "douglas@gmail.com",
    "postcode": "pe22 22a",
    "phoneNumber": "07428233312",
    "city": "London",
    "country": "England",
    "favouriteQuote": "The answer is 42"
}

let properties_count= Object.getOwnPropertyNames(myObj1)
console.log("The given object has "+ properties_count.length + " properities.");
