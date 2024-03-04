// 1 - importação de arquivos
// se fosse .ts não daria certo
import importGreet from "./greet.js";

importGreet();

// 2 - importe de variavel
// has no default export. Did you mean to use 'import { x } from "C:/Users/ct67ca/Desktop/TypeScript-Introducao/9_MODULOS/variable"' instead
// import x from "./variable.js"

import { x } from "./variable.js"
console.log(x)

// 3 - Multiplas importações
import { a, b, myFunction } from "./multiple.js";
console.log(a)
console.log(b)
myFunction();

// 4 - alias
import {someName as name} from "./changename.js"

console.log(name)

// 5 - import All - tem que criar um alias na importação de todos os itens daquele arquivo numbers
import * as myNumbers from "./numbers.js"

console.log(myNumbers)
const nx = myNumbers.n1
console.log(nx)
myNumbers.showNumbers()

// 6 - importando tipos
import {Human} from "./mytype.js"

class User implements Human {
    name
    age

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}

const joao = new User("João",25)
console.log(joao)