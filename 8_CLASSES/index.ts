// 1 - campos em classes
// Property 'age' has no initializer and is not definitely assigned in the constructor, se não iniciar a variavel vai aparecer esse erro
class User {
    //  a ! serve para avisar que em algum momento vai inicializar essa variavel
    name!: string
    age!: number
}


const maria = new User()
console.log(maria)

maria.name = "maria"
// maria.job = "Programmer" - Property 'job' does not exist on type 'User'. (só pode colocar as propriedades que já existem)

//2 - constructor
class NewUser {
    name
    age

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("João",22)
console.log(joao)
//const pedro = new NewUser("Pedro") ou (12,12) - Daria erro

//3 - Campo Readonly
class Car {
    name
    // não precisa alterar essa propriedade nem coloar valor para ela, pois já esta definido
    readonly wheels = 4

    constructor(name:string){
        this.name = name
    }
}

const fusca = new Car ("Fusca")
console.log(fusca)
console.log(fusca.wheels)

fusca.name = "Fusca Turbo"
// fusca.wheels = 5 -  Cannot assign to 'wheels' because it is a read-only property.

// 4 - Herança(extends) e super
class Machine {
    name
    wheels 

    constructor (name:string, wheels: number){
        this.name = name
        this.wheels = wheels
    }
}

const trator = new Machine("Trator", 4)
class KillerMachine extends Machine{
    guns

    constructor(name:string,wheels:number, guns: number){
        super(name,wheels)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4, 3)
console.log(trator)
console.log(destroyer)

//5 - Métodos - função dentro da classe
class Dwarf {
    name

    constructor(name: string){
        this.name = name
    }

    greeting(){
        console.log("Hey stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")
console.log(jimmy.name)
jimmy.greeting()
console.log(jimmy)

//6 - this
class Truck {
    model
    hp

    constructor(model:string, hp:number){
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

//7 - Getters - lê a propriedade
class Person {
    name
    surname

    constructor(name:string, surname:string){
        this.name = name
        this.surname = surname
    }

    // A 'get' accessor must return a value.
    get fullName(){
        return this.name + " "  + this.surname 
    }
}

const MariaEduarda = new Person("Maria", "Eduarda")
console.log(MariaEduarda)
console.log(MariaEduarda.fullName)

//8 - Setters - modifica a propriedade
class Coords{
    x!: number
    y!: number

    set fillX(x: number){
        if(x == 0){
            return
        }

        this.x = x
        console.log("X inserido com sucesso")
    }

    set fillY(y: number){
        if(y == 0){
            return
        }

        this.y = y
        console.log("Y inserido com sucesso")
    }

    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`
    }

}

const myCoords = new Coords()
myCoords.fillX = 15
//myCoords.fillY = 0
myCoords.fillY = 10

console.log(myCoords)
console.log(myCoords.getCoords)

//9 - Herança de interfaces (implements)
interface showTitle {
    itemTitle(): string
}

// quando coloca uma interface tem que seguir as regras delas
class blogPost implements showTitle{
    title 

    constructor(title:string){
        this.title = title
    }

    itemTitle() {
        return `O título do post é: ${this.title}`
    }
}

const myPost = new blogPost("Hello World")
console.log(myPost.itemTitle())

class TestingInterface implements showTitle{
    title 

    constructor(title:string){
        this.title = title
    }

    itemTitle() {
        return `O título é: ${this.title}`
    }
}

//10 - Override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa")
    }
    // se for fazer a alteração desse metodo é mais facil criar outra que atenda a necessidade
    showName() {

    }
}

class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa")
    }
}

const myObject = new Nova()
myObject.someMethod()

// 11 - Visibilidade (PUBLIC) - já esta implicito, não precisa declarar
class C {
    public x = 10
}
class D extends C {
    
}

const cInstance = new C()
console.log(cInstance.x)

const dInstance = new D()
console.log(cInstance.x)

// 12 - Visibilidade (PROTECTED) - acessado apenas em sub classes
class E {
    protected x = 10
    protected protectedMethod(){
        console.log("Esse metodo é protegido")
    }
}

class F extends E {
    showX(){
        console.log("X: " + this.x)
    }
    showprotectedMethod(){
        this.protectedMethod()
    }
}

const fInstance = new F()
fInstance.showX()
fInstance.showprotectedMethod()
// console.log(fInstance.x) - Property 'x' is protected and only accessible within class 'E' and its subclasses.

// 13 - Visibilidade (PRIVATE)
class PrivateClass {
    private name = "Private"

    showName(){
        return this.name
    }


    private privateMethod() {
        console.log("Metodo privado")
    }

    showprivateMethod(){
        this.privateMethod()
    }
}

const pObj = new PrivateClass()

//console.log(pObj.name) - Property 'name' is private and only accessible within class 'PrivateClass'
//console.log(pObj.privateMethod()) - Property 'privateMethod' is private and only accessible within class 'PrivateClass'

console.log(pObj.showName())
console.log(pObj.showprivateMethod())

// class TestingPrivate extends PrivateClass{
//     myMethod(){
//         this.privateMethod()
//     }
// } - não como acessar por sub classes, apenas pela propria classe

// 14 - Static members - PROPORCIONA ACESSO A ELA SEM CRIAR NOVOS OBJETOS
class StaticMembers {
    static prop = "Teste static"

    static staticMethod(){
        console.log("Esse é um metodo estatico")
    }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15 - Generic Class 
class Item <T, U> {
    first
    second

    constructor(first:T, second:U){
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }
}

const newItem = new Item("caixa", "supresa")
console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.showFirst)

const secondItem = new Item(12,true)
console.log(secondItem.showFirst)
console.log(typeof secondItem.first)

// 16 - Parameter properties
class ParameterProperties {
    constructor (public name:string, private qty:number, private price:number){
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Quantidade total é: ${this.qty}`
    }
    get showPrice() {
        return `O preço total é: ${this.price}`
    }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99)

console.log(newShirt.name)

console.log(newShirt.showPrice)
console.log(newShirt.showQty)
//console.log(newShirt.price) - Property 'price' is private and only accessible within class 'ParameterProperties'.

// 17 - Class expressions - serve para criar uma classe anonima
const myClass = class<T>{
    name 

    constructor(name:T){
        this.name = name
    }
}

const pessoa = new myClass("Maria")
console.log(pessoa)

// 18 - Abstract class 
abstract class AbstractClass {
    abstract showName(): void;
}

//const newObj = new AbstractClass() - Cannot create an instance of an abstract class.

class AbstractExample extends AbstractClass {
    name: string

    constructor(name:string) {
        super();
        this.name = name
    }

    showName() {
        console.log("O nome é " + this.name)
    }
}

const newAbstractObject = new AbstractExample("Maria")
console.log(newAbstractObject)

// 19 - Relação entre classes
class Dog {
    name!: string
}

class Cat {
    name!: string
}

// ele verifica o que esta dentro, por isso que é completamente possivel fazer isso
const doguinho: Dog = new Cat()
console.log(doguinho)