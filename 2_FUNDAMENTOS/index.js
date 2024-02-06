"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.36545456;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - STRING
const firstName = "Maria";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Ferreira";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - BOOLEAN
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - INFERENCE AND ANNOTATION
let ann = "Teste"; // annotation
let inf = "Teste"; // inference
// vai dar erro:
// ann = 1
// inf = 1
// 5 - DESAFIO 2
let num = 10;
console.log(typeof num);
console.log(typeof num.toString());
// Jeito dele
const n1 = 10;
const numberString = n1.toString();
const printMyNumber = `Eu vou imprimir o número ${numberString}`;
console.log(printMyNumber);
