let userName: string = "Akshit";
let age: number = 22;
let isLoggedIn: boolean = true;

let score = 100;
// Type 'string' is not assignable to type 'number'.
// score = "100"

let marks: number[] = [90, 85, 91];
let marks1: Array<number> = [87, 93, 79];

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const user: { id: number; name: string; email: string; isActive: boolean } = {
  id: 5,
  name: "Akshit",
  email: "akshit@mail.com",
  isActive: true,
};

interface Products {
  id: number | string;
  name: string;
  description?: string;
}

function add(a: number, b: number): number {
  return a + b;
}

interface BaseUser {
  id: number;
  name: string;
  email: string;
}

interface Admin extends BaseUser {
  permission: boolean;
  role: ["User" | "Admin"];
}

type AuditInfo = {
  venue: string;
  description: string;
};

function identity<T>(t: T) {
  return t;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
const response: ApiResponse<User> = {
  success: true,
  message: "Response is ok",
  data: {
    id: 1,
    name: "Akshit",
    email: "akshit@mail.com",
    isActive: true,
  },
};

enum Role {
  Admin,
  USer,
  Instructor,
}

const updateUser = (updates: Partial<Role>) => {
  console.log(updates);
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}
