"use strict";
// 1 - campos em classes
// Property 'age' has no initializer and is not definitely assigned in the constructor, se não iniciar a variavel vai aparecer esse erro
class User {
}
const maria = new User();
console.log(maria);
maria.name = "maria";
// maria.job = "Programmer" - Property 'job' does not exist on type 'User'. (só pode colocar as propriedades que já existem)
//2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
//const pedro = new NewUser("Pedro") ou (12,12) - Daria erro
//3 - Campo Readonly
class Car {
    constructor(name) {
        // não precisa alterar essa propriedade nem coloar valor para ela, pois já esta definido
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
// fusca.wheels = 5 -  Cannot assign to 'wheels' because it is a read-only property.
// 4 - Herança(extends) e super
class Machine {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }
}
const trator = new Machine("Trator", 4);
class KillerMachine extends Machine {
    constructor(name, wheels, guns) {
        super(name, wheels);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4, 3);
console.log(trator);
console.log(destroyer);
//5 - Métodos - função dentro da classe
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
//6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
//7 - Getters - lê a propriedade
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    // A 'get' accessor must return a value.
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const MariaEduarda = new Person("Maria", "Eduarda");
console.log(MariaEduarda);
console.log(MariaEduarda.fullName);
//8 - Setters - modifica a propriedade
class Coords {
    set fillX(x) {
        if (x == 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y == 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
//myCoords.fillY = 0
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
// quando coloca uma interface tem que seguir as regras delas
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
//10 - Override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
    // se for fazer a alteração desse metodo é mais facil criar outra que atenda a necessidade
    showName() {
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - Visibilidade (PUBLIC) - já esta implicito, não precisa declarar
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(cInstance.x);
// 12 - Visibilidade (PROTECTED) - acessado apenas em sub classes
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Esse metodo é protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showprotectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showprotectedMethod();
// console.log(fInstance.x) - Property 'x' is protected and only accessible within class 'E' and its subclasses.
// 13 - Visibilidade (PRIVATE)
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Metodo privado");
    }
    showprivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
//console.log(pObj.name) - Property 'name' is private and only accessible within class 'PrivateClass'
//console.log(pObj.privateMethod()) - Property 'privateMethod' is private and only accessible within class 'PrivateClass'
console.log(pObj.showName());
console.log(pObj.showprivateMethod());
// class TestingPrivate extends PrivateClass{
//     myMethod(){
//         this.privateMethod()
//     }
// } - não como acessar por sub classes, apenas pela propria classe
// 14 - Static members - PROPORCIONA ACESSO A ELA SEM CRIAR NOVOS OBJETOS
class StaticMembers {
    static staticMethod() {
        console.log("Esse é um metodo estatico");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - Generic Class 
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("caixa", "supresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - Parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Quantidade total é: ${this.qty}`;
    }
    get showPrice() {
        return `O preço total é: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
//console.log(newShirt.price) - Property 'price' is private and only accessible within class 'ParameterProperties'.
// 17 - Class expressions
