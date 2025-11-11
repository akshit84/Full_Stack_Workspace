const m_heros = ["Thor", "Spiderman", "Iron Man"]
const d_heros = ["Super Man", "Flash", "Bat Man"]

// console.log(m_heros.toString());

// m_heros.push(d_heros)
// console.log(m_heros);

// const all = m_heros.concat(d_heros)
// console.log(all);

// const all_new_heros = [...m_heros, ...d_heros]
// console.log(all_new_heros);

// FLAT -> It returns new array with all sub array in single array with specified depth 
// const anotherArr =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const usable_anotherArr = anotherArr.flat(Infinity)
// console.log(usable_anotherArr);
// console.log(usable_anotherArr.sort());


// convert any string, objects or node data into array
// console.log(Array.isArray("AKSHIT"));
// console.log(Array.from("AKSHIT"));
// console.log(Array.from({name: "Akshit"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

