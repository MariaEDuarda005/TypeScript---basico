"use strict";
// funções sem retorno
// 1 - void 
// void = não retorna nada
function withoutReturn() {
    console.log("está função não tem retorno!");
    //return 1 - Type 'number' is not assignable to type 'void'.
}
withoutReturn();
// 2 - callback como argumento - DUVIDA
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, username) {
    console.log("Preparando a função");
    const greet = f(username);
    console.log(greet);
}
preGreeting(greeting, "Maria");
// 3 - generic function
// Eles são uma maneira de dizer aos nossos componentes (funções, classes ou interfaces) o tipo que queremos usar quando executarmos esse pedaço de código
// Os genéricos nos permitem escrever uma função que pode assumir qualquer tipo e transformar nossa função com base nesse tipo.
// function firstElement(arr){ - Parameter 'arr' implicitly has an 'any' type
// parametro tem que ser um T e o retorno tem que ser um T
// o T fala que pode ser qualquer coisa
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Matheus" }, { age: 30, job: "Programmer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    // para fazer a conversão para num, utiliza o +
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 6));
console.log(biggestNumber("4", "5"));
// 5- especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
// para aceitar mais de um tipo
console.log(mergeArrays([1, 2, 3], ["teste", "teste"]));
// 6 - parametros opicionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name} tudo bem?`;
    }
    else {
        return `Olá ${name} tudo bem?`;
    }
}
console.log(modernGreeting("Maria"));
console.log(modernGreeting("Eduarda", "Maria"));
