// 15. Given:
//    const students = {Amit: 85, Rahul: 92, Sneha: 78};
//    Convert this into an array of objects like:
//    [{name: "Amit", score: 85}, {name: "Rahul", score: 92}, {name: "Sneha", score: 78}];

const students = { Amit: 85, Rahul: 92, Sneha: 78 };

const arr1 = Object.entries(students);

// console.log(arr1);

const output = arr1.map((entry) => {
    const [name, score] = entry;
    
    return {name, score};
})

console.log(output);
