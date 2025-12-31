const chai = {
  name: "Masala Chai",
  price: 30,
  isHot: true,
};

// Automatic infer of above object

// {
//   name: string;
//   price: number;
//   isHot: boolean;
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Simple tea",
  price: 15,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adarakChai: Tea = {
  name: "Adarak chai",
  price: 25,
  ingredients: ["Ginger", "milk", "tea leaves"],
};

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "Steel" };
smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "Akshit",
  password: "12345",
  // isActive: true
};
type Item = { name: string; quantity: number };
type Address = { street: string; pincode: number };

type Order = {
  id: string;
  item: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updatesChai = (updates: Partial<Chai>) => {
  console.log(updates);
};
updatesChai({price: 50})
updatesChai({})

type ChaiOrder = {
    name?: string
    quanitty?: number 
}
const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "Double Masala Chai",
    quanitty: 5
})