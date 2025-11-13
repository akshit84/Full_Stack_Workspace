// 9. Given:
//    const items = [
//      {name: "pen", price: 10},
//      {name: "book", price: 40},
//      {name: "bag", price: 50}
//    ];
//    Use reduce() to find the total price of all items.

const items = [
    { name: "pen", price: 10 },
    { name: "book", price: 40 },
    { name: "bag", price: 50 }
];

const output = items.reduce((total, item) => {
    return total = total + item.price
},0)

console.log(output);
