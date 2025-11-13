//Singleton

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Akshit",
    "full name": "Akshit bhadesiya",
    [mySym]: "key1",
    age: 22,
    email: "akshit@123.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "akshit123@go.com"
// Object.freeze(JsUser)
// JsUser.email = "akshit123@gogle.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


