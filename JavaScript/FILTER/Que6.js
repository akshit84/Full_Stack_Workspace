// 6. Given an array of users: 
//    const users = [
//      {name: "Amit", active: true},
//      {name: "Rahul", active: false},
//      {name: "Sneha", active: true}
//    ];
//    Use filter() to return only active users.

const users = [
    { name: "Amit", active: true },
    { name: "Rahul", active: false },
    { name: "Sneha", active: true }
];

const output = users.filter((item) => {  
    return (item.active === true)
});

console.log(output);
