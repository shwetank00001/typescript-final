// console.log("Hello TS");

let newName:string = "Shwetank"
newName = "ShwetankMishra"
console.log(newName.toUpperCase())


let amount:number =40;
amount = 10-4;
console.log(amount.toExponential(3));

let isAwesome:boolean = true;
isAwesome = false
console.log(isAwesome);

let newTestName:string = "Mishra";
console.log(newTestName.charAt(3));


const printNewName:boolean = false;

console.log(`New Name is ${printNewName ? "Don" : "Nice1"}`)



//UNION TYPES
let tax:number | string  = 10; 
tax = "400#2"
console.log(tax)



// LITERAL TYPES
let reqStatus: 'pending' | 'success' | 'error' = 'pending';
reqStatus = "pending";
// reqStatus ="random"
console.log(reqStatus)



//any type
let notsure:any = 10;
notsure = function(){
    console.log("Hello");
}
notsure()


//build error
// let newData = "Fetching from API";
// console.log(newData);
// newData = 50;
// console.log(newData)