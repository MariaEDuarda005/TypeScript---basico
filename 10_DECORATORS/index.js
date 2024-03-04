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
