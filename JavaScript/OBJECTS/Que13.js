// 13. Write a function that merges two objects into one.

const obj1 = {
    fname: "Akshit Bhadesiya",
    age: 22,
    city: "Rajkot"
}

const obj2 ={
    email: "akshit@google.com",
    number: 9876543210,
}

const merged_obj = {...obj1, ...obj2 }

console.log(merged_obj);
