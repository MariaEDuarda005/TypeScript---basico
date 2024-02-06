"use strict";
// 1 - ARRAYS
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
//numbers = 'teste'
const nomes = ["Maria", "Eduarda", "Marcela"];
//nomes.push(4) - Argument of type 'number' is not assignable to parameter of type 'string'
//2 - OUTRA SIXTAXE DO ARRAYS
const nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[0]);
//3 - ANY
// tipagem fraca sendo desenvolvida
const arr1 = [1, "teste", true, [], { nome: "Maria" }];
console.log(arr1);
arr1.push([1, 2, 3]);
//4 - PARAMETROS TIPADOS
function soma(a, b) {
    console.log(a + b);
}
soma(25, 35);
//5 - RETORNO DE FUNÇÃO
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Maria"));
//6 - FUNÇÕES ANÔNIMAS
setTimeout(function () {
    const sallary = 2000;
    //console.log(sallary)
    //console.log(parseFloat(sallary)) - declare function parseFloat(string: string): number;
}, 3000);
//7 - TIPOS DE OBJETOS
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 36, y: 48.6 };
passCoordinates(objCoord);
const pessoasObj = { nome: "Maria", surname: "Eduarda" };
console.log(pessoasObj);
//8 - PROPS OPCIONAIS
// quando coloca o ? o parametro fica opcional
// porém o primeiro argumento não pode ser opcional
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
// ele não vai dar erro pois apesar de ter três parametros um é opicional
showNumbers(4, 5);
//showNumbers(1) - An argument for 'b' was not provided.
// 9 - VALIDANDO ARGUMENTO OPICIONAL
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Maria", "Eduarda"));
console.log(advancedGreeting("Marcela"));
