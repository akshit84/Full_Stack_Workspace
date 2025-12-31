let response: any = "90";

// forcefull assertation 
let numericLength: number = (response as string).length;

type Book = { name: string };

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

let value: any;
value = "42";
value = [1, 2, 3, 4, 5];
value = 9.1;

if (typeof value === "string") {
  value.toUpperCase();
}

type Role = "admin" | "user"|"superadmin";
function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirect to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirect to user dashboard");
    return;
  }
  role;
}
