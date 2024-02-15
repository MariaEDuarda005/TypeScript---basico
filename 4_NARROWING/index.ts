// 1 - type guard
// é uma validação utilizando o typeof
function sum(a: number | string, b: number | string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    }else if (typeof a === "number" && typeof b === "number"){
        console.log(a+b)
    }else{
        console.log("Impossível realizar essa ação!")
    }
    // else if (typeof a === "string" && typeof b === "number"){
    //     console.log(parseFloat(a) + b)
    // }else if (typeof a === "number" && typeof b === "string"){
    //     console.log(parseFloat(b) + a)
    // }
}

sum("5", "45")
sum(5,3.6)
sum("8",12)
// sum(8,"12")

// 2 - checando se o valor existe
function operations(arr:number[], operation:string | undefined){
    if (operation){ // isso é a checagem do valor, o narrowing
        if (operation === "sum"){
            // .reduce - to reduce it to a single value.
            const sum  = arr.reduce((i, total) => i + total)
            // i - numero atual
            // total - uma variavel que vai ser implementada a cada passagem do array
            console.log(sum)
        }else if(operation === "multiply"){
            const multiply  = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
        else if(operation === "division"){
            const division  = arr.reduce((i, total) => i / total)
            console.log(division)
        }else if(operation === "subtraction"){
            const subtraction  = arr.reduce((i, total) => i - total)
            console.log(subtraction)
        }
    }else{
        console.log("Defina uma operação")
    }
}

// operations([1, 2, 3]) - function operations(arr:number[], operation:string | undefined) - (An argument for 'operation' was not provided.)
operations([1, 2, 3], "sum")
operations([3, 2, 3], "multiply")
operations([10, 2, 5], "division")
operations([20,3], "subtraction")

// 3 - instance of
class User {
    name
    constructor(name: string){
        this.name = name // igual java
    }
}

// vai fazer uma herança do user - para fazer a herança usa extends
class SuperUser extends User {
    constructor(name:string){
        super(name)
    }
}

const maria = new User("Maria")
const eduarda = new SuperUser("Eduarda")

console.log(maria)
console.log(eduarda)

function userGreeting(user:object){
    if (user instanceof SuperUser){
        console.log(`Olá super user: ${user.name}`)
    }else if (user instanceof User){
        console.log(`Olá user: ${user.name}`)
    }
}

userGreeting(eduarda)
userGreeting(maria)

// 4 - operador IN
class Dog{
    name
    breed
    constructor(name:string, breed?:string){
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}

const dine = new Dog("Dine")
const bob = new Dog("Bob", "Pastor alemão")

function showDogDerails(dog: Dog){
    if ('breed' in dog){
        console.log(`O cachorro é da raça ${dog.breed}`)
    }else{
        console.log("O cachorro é vira-lata <3")
    }
}

showDogDerails(bob)
showDogDerails(dine)

// DESAFIO 3
type Review = number | boolean

function showReview(review:Review){
    
    if (!review){
        console.log("Você não avaliou o produto")
        return
    }

    console.log(`A nota que você deu foi: ${review}`)
}

showReview(false)
showReview(2)