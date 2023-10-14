let a = 2;
let b = 3;
let c = 2;
(a == b) // FALSE
(a == c) //TRUE

typeof "John Doe" // string
typeof 3.14 // int
typeof true //boolean
typeof 234567890123456789012345678901234567890n // bigint
typeof undefined // undefined
typeof null // object
typeof Symbol('symbol') // symbol

let x = 2;
let y = "2";
(x == y) // true
(x === y) //false

let x1 = 3;
let y1 = "3";
x + y //23

let x2 = 24;
let y2 = "Hello";
x + y // Hello

let name = "Vivek";
let surname = " Bisht";
name + surname // Vivek Bisiht

let x3 = 3;
let y3 = "3";
x - y // 0

let x4 = 0;
let y4 = 23;

if(x) { console.log(x) } //2

if(y) { console.log(y) } //2

isNaN("Hello") // true
isNaN(345) // false
isNaN('1') // false
isNaN(true) //false
isNaN(false) // false
isNaN(undefined) // true