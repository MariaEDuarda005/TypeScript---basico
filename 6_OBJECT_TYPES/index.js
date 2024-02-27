"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
    else {
        console.log("O produto não está disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "tenis", price: 190.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é ${user.role}`);
    }
}
const u1 = { email: "mariaeduarda@gmail.com", role: "admin" };
const u2 = { email: "marcela@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const Maria = {
    name: "Maria",
    age: 19
};
const poder = {
    name: "Superman",
    age: 37,
    superpowers: ["Voar", "Força"]
};
console.log(poder);
console.log(poder.superpowers[0]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 38
};
console.log(arnold);
console.log(arnold.caliber);
//7 - ReadOnlyArray - não tem como fazer a modificação no array
let myArray = ["Maça", "Laranja", "Banana"];
//myArray[3] = "Mamão" // para adicionar o item
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
// array foi modificado mas somente por metodos
myArray = myArray.map((item) => {
    return `Fruta ${item}`;
});
console.log(myArray);
// number[] - An element access expression should take an argument.
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ["Maria", 19];
anotherUser[0] = "Marcela";
console.log(anotherUser);
//9 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
