// this is a simple console logging statement
console.log("Hello World!");

// different kinds of console logging

const msg = 'this is a message';

console.log(msg);

console.info(msg);

console.warn(msg);

console.error(msg);

// Exercise 1

console.log("Hilary");
console.log("Lanham");
console.log("Bristol");
console.log("Libra");

// Exercise 2

console.log('%c' + 'Exercise2', 'color: orange; background-color: black; padding: 10px; font-weight: bold; font-family: fantasy')

//Exercise 3

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalMoney - moneyPaidSoFar}`);

console.log ("Working?");

//For loop

for(let i=0; i < 10; i++)
{
    console.log(`i = ${i}`);
};

//Loop exercise

// Flow 1: 
let a = 100; 

for(a; a <= 200; a++){
    console.log("Print A ") 
    a++
}

 //
 
