"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("iniciando decoator!");
    return function (target, propertKey, descriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("terminando o metodo de execução");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - multiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("executou a");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("executou b");
    };
}
function c() {
    return function (target, propertKey, descriptor) {
        console.log("executou c");
    };
}
class MultiplosDecorators {
    // ele executa o mais abaixo primeiro
    // a ordem no console vai ficar b a c 
    testing() {
        console.log("terminando a execução");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultiplosDecorators.prototype, "testing", null);
const multiple = new MultiplosDecorators();
multiple.testing();
// 3 - class decorator (decorator de classe)
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando Usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const maria = new User("Maria");
console.log(maria);
//4 - Method Decorator
function enumrable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da maquina é ${this.name}`;
    }
}
__decorate([
    enumrable(true)
], Machine.prototype, "showName", null);
const trator = new Machine("trator");
console.log(trator.showName());
// 5 - acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumrable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumrable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 78);
console.log(charmander);
// 6 - property decorator
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            // padStart - adiciona valores no inicio da string
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("184");
console.log(newItem);
console.log(newItem.id);
// 7 - exemplo real com class decorator
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createDate
], Pen);
const newBook = new Book(1);
const newPen = new Pen(8);
console.log(newBook.createdAt);
console.log(newPen.createdAt);
// 8 - exemplo real Method Decorator
function checkIfUserPost() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        // esses tres pontinhos serve para dizer que vai pegar todos os argumentos de args, e vai ser um array
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuario já postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuario: ${content}`);
    }
}
__decorate([
    checkIfUserPost()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted); // aparece que o usuario já postou
newPost.post("Meu terceiro post!", newPost.alreadyPosted); // aparece que o usuario já postou
// 9 - exemplo real Property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no maximo ${limit} digitos`);
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const admin = new Admin("admin123");
const pedro = new Admin("Pedroadmin123");
console.log(admin);
