interface Chai {
  flavor: string;
  price: number;
}

const masasla:Chai = {
    flavor: "Masala",
    price: 30,
};

interface Shop {
    readonly id: number,
    name: string
}

const s: Shop = {id: 1, name: "Akshit"}

interface DiscountCalculator{
    (price:number):number
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine {
    start(): void,
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("Stare");
    },
    stop() {
        console.log("Stop");
    },
}

// When we declare same interface many time, at the end it all merge in one interface
interface User {
    name: string
}
interface User {
    age: number
}

const u: User = {
    name: "Akshit",
    age: 23
}

function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("Akshit")
wrapInArray(52)

function pair<A, B>(a:A, b:B): [A, B]{
    return [a, b]
}
pair("Masala", {flavor: "Ginger"})

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}

interface ApiPromise<T>{
    status: number,
    data: T
}

const res:ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "Masala"}
} 

