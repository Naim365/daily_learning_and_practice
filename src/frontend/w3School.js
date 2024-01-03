// TODO 01

/*
* JavaScript Statements
* Declare 3 variables
*/

let a, b, c;

a = 5;
b = 6;
c = a + b;

console.log(c);

// TODO 02

/*
* JavaScript Variables
* You can also assign a value to the variable when you declare it
*/
let person = "John Doe",
  carName = "Volvo",
  price = 200;



carName = "Toyota";

console.log(carName, person, price);


// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

let x = "5" + 2 + 3;
console.log(x);

let y = 2 + 9 + "5";
console.log(y);

let z = 2 + 9 + 10;
console.log(z);

let d = 2*5;
console.log(d);

// TODO 03

/*
* Constant Objects and Arrays
* 

    But you CAN:
    Change the elements of constant array
    Change the properties of constant object

*/

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

console.log(cars);

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Naim"; 

car.name = "BMW"

console.log(car);

// TODO 04

/*
* JavaScript String Comparison
* The += assignment operator can also be used to add (concatenate) strings:
* Adding two numbers, will return the sum, but adding a number and a string will return a string:
*/

let text1 = "20";
let text2 = "5";
let result = text1 < text2;

console.log(result);

let text4 = "What a very ";
text4 += "nice day aaaaaaaaaa"; 

console.log(text4);

let text5 = "Hello" + 5;
console.log(text5);