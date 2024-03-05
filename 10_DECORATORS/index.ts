// 1 - exemplo decorator
function myDecorator() {
    console.log("iniciando decoator!")
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {

        console.log("Executando")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)

    }
}

class myClass {
    name!: string

    @myDecorator()
    testing() {
        console.log("terminando o metodo de execução")
    }
}

const myObj = new myClass()
myObj.testing()

// 2 - multiplos decorators
function a(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou a") 
    }
}

function b(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou b") 
    }
}

function c(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou c") 
    }
}

class MultiplosDecorators{
    // ele executa o mais abaixo primeiro
    // a ordem no console vai ficar b a c 
    @c()
    @a()
    @b()
    testing(){
        console.log("terminando a execução")
    }
}

const multiple = new MultiplosDecorators()
multiple.testing()

// 3 - class decorator (decorator de classe)
function classDec(constructor: Function){
    console.log(constructor)
    if(constructor.name === "User"){
        console.log("Criando Usuário")
    }
}

@classDec
class User{
    name 

    constructor(name: string){
        this.name = name
    }
   
}

const maria = new User("Maria")
console.log(maria)

//4 - Method Decorator
function enumrable(value:boolean){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value
    }
}

class Machine {
    name 

    constructor(name:string){
        this.name = name
    }

    @enumrable(true)
    showName(){
        console.log(this)
        return `O nome da maquina é ${this.name}`
    }
}

const trator = new Machine("trator")
console.log(trator.showName())

// 5 - acessor decorator
class Monster{
    name?
    age?

    constructor (name:string, age:number){
        this.name = name
        this.age = age
    }

    @enumrable(true)
    get showName(){
        return `Nome do monstro: ${this.name}`
    }
    @enumrable(false)
    get showAge(){
        return `Idade do monstro: ${this.age}`
    }

}

const charmander = new Monster("Charmander", 78)
console.log(charmander)

// 6 - property decorator
function formatNumber(){
    return function(target:Object, propertKey: string){
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal:string) {
            // padStart - adiciona valores no inicio da string
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}


class ID{
    @formatNumber()
    id 
    constructor(id:string){
        this.id = id
    }
}

const newItem = new ID("184")
console.log(newItem)
console.log(newItem.id)

// 7 - exemplo real com class decorator
function createDate(created: Function){
    created.prototype.createdAt = new Date();
}
@createDate
class Book {
    id 
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}
@createDate
class Pen {
    id 
    createdAt?: Date;

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(1)
const newPen = new Pen(8)

console.log(newBook.createdAt)
console.log(newPen.createdAt)

// 8 - exemplo real Method Decorator
function checkIfUserPost() {
    return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor){
        const childFunction = descriptor.value
        console.log(childFunction)
        // esses tres pontinhos serve para dizer que vai pegar todos os argumentos de args, e vai ser um array
        descriptor.value = function(...args: any[]){
            if(args[1] === true){
                console.log("Usuario já postou")
                return null
            }else{
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}

class Post{
    alreadyPosted = false

    @checkIfUserPost()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log(`Post do usuario: ${content}`)
    }
}

const newPost = new Post()
newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu segundo post!", newPost.alreadyPosted) // aparece que o usuario já postou
newPost.post("Meu terceiro post!", newPost.alreadyPosted) // aparece que o usuario já postou

// 9 - exemplo real Property decorator
function Max(limit:number){
    return function(target: object, propertyKey: string){
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            if(newVal.length > limit){
                console.log(`O valor deve ter no maximo ${limit} digitos`)
            }else{
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey,{
            get: getter,
            set: setter
        })
    }
}

class Admin{
    @Max(10)
    username

    constructor(username:string){
        this.username = username
    }
}

const admin = new Admin("admin123")
const pedro = new Admin("Pedroadmin123")

console.log(admin)