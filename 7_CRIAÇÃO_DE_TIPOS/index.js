"use strict";
//1 - Generics <>
// aceitar qualquer tipo que precise 
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
//2 - constraint em generic
// fazer um aobservação para que o generic tinha um tipo especifico
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
// ele aceita por que todos tem a propriedade name
const myObj = { name: "Porta", cor: "Branca" };
const anotherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(anotherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.4, color: "Branco" };
const MyPen = { name: "Caneta", wheels: false, engine: false, color: "Roxo" };
console.log(myCar);
console.log(MyPen);
//4 - Type parameters - algum parametro é uma função
// simboliza que K é uma chave de T
function getSomeKey(obj, key) {
    //return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`
}
const server = {
    hd: '2TB',
    ram: '32gb'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Maria",
    age: 19,
    hasDriveLicense: false
};
console.log(showCharName(myChar, 'name'));
//6 - Typeof type operator
const UserName = "Maria";
const UserName2 = "Joao";
const UserName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão de pouca carga"
};
function showKm(km) {
    console.log(`O veiculo tem a km de ${km}`);
}
const newCar = {
    km: 5000,
    kg: 522
};
showKm(newTruck.km);
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
