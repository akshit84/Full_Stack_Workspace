let drink = "juice";

// Inference means it auto detect types of our data
let cups = Math.random() > 0.5 ? 10 : "5";

// Annotation means we have to define type
let flower:string = "Lotus"
let flowerQuantity:number = 52
let isActive:boolean = true

// Union
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
apiRequestStatus = 'success'

const orders = ['12', '20', '43', '10']

// we avoid any here 
let currentOrder: string | undefined;

for(let order of orders){
    if (order === '43') {
        currentOrder = order
        break
    }
}

console.log(currentOrder);
