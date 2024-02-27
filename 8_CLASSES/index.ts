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