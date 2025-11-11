let fname1 = "Akshit bhadeisya";
let fname2 = `Elon Musk`; 


let len = fname1.length;
let char = fname1.charAt(4)
let charCode = fname2.charCodeAt(2) // The method returns a UTF-16 code (an integer between 0 and 65535)
let concatination = fname1.concat(" ", "is Full Stack intern.")
// let slicing = fname1.slice(3, 9)
// let slicing = fname1.slice(-7)
let slicing = fname1.slice(-16, -11)
let SubString = fname1.substring(10)
let upper = fname1.toUpperCase()
let well = fname1.isWellFormed()
let Repeat = fname1.repeat(2)


console.log(len);
console.log(char);
console.log(charCode);
console.log(concatination);
console.log(slicing);
console.log(SubString);
console.log(upper);
console.log(well);
console.log(Repeat);

// Below exapmles show that var ignore block scope and take last value of itration while let is block scope so it stores every iteration value  
// The key difference between var and let is their scope and behavior during execution. var is function-scoped and can leak outside blocks, which often causes unexpected bugs in loops and async code. let is block-scoped, doesn’t allow redeclaration, and avoids scope pollution. var variables are hoisted with undefined, while let variables stay in the temporal dead zone until initialized. Because of these safer and more predictable behaviors, let is preferred in modern JavaScript for managing mutable values.


// for(var i = 1; i<=5; i++){
//     setTimeout(() => {
//         console.log("var iteration count ->",i );
//     }, 2000);
// }
// console.log("Outside loop (var i) is -> ",i);


// for(let j = 1; j<=5; j++){
//     setTimeout(() => {
//         console.log("let iteration count ->",j );
//     }, 0);
// }
// console.log("Outside loop (var i) is -> ",typeof j);

for (let index = len-1; index >=0; index--){
    let rev = fname1[index];  
    console.log(rev);
    
}
// console.log(element);









