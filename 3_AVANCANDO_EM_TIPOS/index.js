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
console.log(advancedGreeting("Guilherme"));
// 10 - unique type 
function showBalance(balance) {
    console.log(`O saldo da conta é R${balance}`);
}
// funciona tanto com num como com string, aceita mais dados
showBalance(100);
showBalance("200");
//showBalance(true) - Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
const arr2 = [1, "teste", true];
// 11 - AVANÇANDO EM UNION TYPES
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado";
    }
    return `A função do usuario é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
// automaticamente compila
function showID(id) {
    console.log(`O ID é: ${id}`);
}
showID(5);
showID("15");
// function showcoord(obj: {x:number, y:number, z: number}) - jeito mais complicado
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Maria", age: 19 };
console.log(somePerson);
// type personType = {
//     age: number
// } - Duplicate identifier 'personType'.
// quando é type não podemos modificar, como se type fosse uma constante e a interface fosse um let que podemos modeficar
// quando procuramos modificar usamos a INTERFACE
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// showDirection("top") - Argument of type '"top"' is not assignable to parameter of type '"left" | "right" | "center"'.
// 16 - non null assertion operators
const p = document.getElementById("some-p");
//console.log(p.innerHTML) - p' is possibly 'null'.
console.log(p.innerHTML); // colocando a ! automaticamente valida o erro, usa quando tem um elemento do DOM e quer identificar ele no typescript, para fazer uma manipulação
// 17 - Bigint
// n = 1000n - BigInt literals are not available when targeting lower than ES2020.
let n;
n = 1000n;
console.log(n);
// 18 - symbol - valores unicos
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB); // maneira mais correta pois verifica o tipo
