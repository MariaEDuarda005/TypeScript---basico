// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product:Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailable){
        console.log("O produto está disponivel")
    }else{
        console.log("O produto não está disponivel")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "tenis", price: 190.99,isAvailable: false})

// 2 - propriedades opicionais em interfaces
interface User{
    email: string,
    role?: string
}

function showUserDetails(user:User){
    console.log(`O usuario tem o e-mail: ${user.email}`)
    if (user.role){
        console.log(`A função do usuario é ${user.role}`)
    }
}

const u1:User = {email: "mariaeduarda@gmail.com", role:"admin"}
const u2:User = {email: "marcela@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

//3 - readonly - pode ser alterada apenas uma vez, o valor não vai mudar
interface Car{
    brand:string,
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)
// fusca.wheels = 5 - Cannot assign to 'wheels' because it is a read-only property. (propriedade apenas de leitura)

//4 - index signature
interface CoordObject{
    // tem que deixar como string para não dar erro
    [index:string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15
console.log(coords)

//5 - extending types (tipos mais complexos por meio de uma interface) - HERANÇA DE INTERFACE
interface Human {
    name: string
    age: number
}

// herdado da interface humano
interface SuperHuman extends Human{
    superpowers: string[]
}

const Maria: Human = {
    name: "Maria",
    age: 19
}

const poder: SuperHuman = {
    name: "Superman",
    age: 37,
    superpowers: ["Voar", "Força"]
}

console.log(poder)
console.log(poder.superpowers[0])

//6 - Intersection Types
interface Character{
    name: string
}

interface Gun{
    type: string
    caliber: number
}

// como se fosse uma herança de interface, unindo elas em uma só
// Uma união entre duas interfaces
type HumanWithGun = Character & Gun
const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 38
}

console.log(arnold)
console.log(arnold.caliber)

//7 - ReadOnlyArray - não tem como fazer a modificação no array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

//myArray[3] = "Mamão" // para adicionar o item
console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

// array foi modificado mas somente por metodos
myArray = myArray.map((item) => {
    return `Fruta ${item}`
})

console.log(myArray)

//8 - Tuplas - deixa os arrays mais previsível
type fiveNumbers = [number, number,number, number,number]

// number[] - An element access expression should take an argument.
const myNumberArray: fiveNumbers = [1,2,3,4,5]

type nameAndAge = [string, number]

const anotherUser = ["Maria", 19]
anotherUser[0] = "Marcela"
console.log(anotherUser)

//9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1,2])