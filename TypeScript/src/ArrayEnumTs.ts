const chaiFlavours: string[] = ["Masala", "Ginger"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 4.1];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Ginger", price: 20 },
];

// readonly means when we initialize any array at this time we declare it but cannot modify it (once it's declare cannot modify it)
const cities: readonly string[] = ["Rajkot", "Ahmedabad"];

let ChaiTuple: [string, number];
ChaiTuple = ["Masala", 20];

// Order of datatypes must maintain in tuple
// ChaiTuple = [20, "Masala"]

let userInfo: [string, number, boolean?];
userInfo = ["Akshit", 100];

const location: readonly [number, number] = [28.66, 32.22];

const chaiItem: [name: string, price:number] = ["Masala", 50]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE  
}
const size = CupSize.LARGE  

enum ChaiType  {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type: ChaiType) {
    console.log(`making ${type}`);
}

makeChai(ChaiType.GINGER)

enum RandomEnum {
    ID = 1,
    NAME = "Akshit"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIG = 3
}