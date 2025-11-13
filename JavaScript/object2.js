// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ellie"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Bob",
            lastname: "xyz"
        }
    }

}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }

console.log(obj3);

const course = {
    coursename: "JavaScript",
    price: "999",

}
// course.coursename

//De-structuring
// const {coursename: c_name} = course
// console.log(c_name);
let element =""
// for (const x in course) {
    
//     element += course[x] + " ";

//     // const element = course[x];
//     console.log(element);
// }
const array1 = ["Apple", "Banana", "Orange", "Watermealon"]
array1.forEach((element) => console.log(element)
)
