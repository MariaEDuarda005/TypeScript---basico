// // 1 - var, let e const
// var x = 10
// var y = 15

// if (y > 10){
//     var x = 5
//     console.log(x)
// }

// console.log(x)

// let a = 10
// let b = 15

// // teram um escopo de bloco dentro do bloco das chaves
// if (b > 10){
//     let a = 5
//     console.log(a) 
// }

// console.log(a)

// let i = 100

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// console.log(i)

// // const funciona da mesma maniera que o let para bloco
// function logName() {
//     const name = 'Maria'
//     console.log(name)
// }

// const name = 'Marcela'

// logName()

// console.log(name)

// // 2 - arrow functions
// const sum = function sum(a,b){
//     return a + b
// }

// const arrowSum = (a, b) => a + b

// console.log(sum(5,5))
// console.log(arrowSum(8,8))

// const greeting = (name) => {
//     if(name) {
//         return "Olá " + name + "!"
//     } else {
//         return "Olá!"
//     }
// }

// console.log(greeting("Maria"))
// console.log(greeting())

// const testeArrow = () => console.log("testou!")
// testeArrow()

// const user = {
//     name: "Maria",
//     sayUserName(){
//         var self = this
//         setTimeout(function() {
//             console.log(self)
//             console.log("Username: " + self.name)
//         }, 500)
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this)
//             console.log("Username: " + this.name)
//         }, 700)
//     },
// }

// // user.sayUserName()
// // user.sayUserNameArrow()

// // 3 - filter
// const arr = [1,2,3,4,5]

// const highNumbers = arr.filter((n) => {
//     if( n>= 3){
//         return n
//     }
// })

// console.log(highNumbers)

// const users = [
//     {name: "erika", available: true},
//     {name: "marcela", available: false},
//     {name: "adriano", available: true},
//     {name: "guilherme", available: true},
// ]

// const availableUsers = users.filter((user) =>
//     user.available
// )

// // se tiver as chaves precisa por return
// const notAvailableUsers = users.filter((user) => {
//     return !user.available
// })

// console.log(users)
// console.log(availableUsers)
// console.log(notAvailableUsers)

// 4 - map
const products = [
    {name: 'Camisa', price: 12.66, category: 'Roupa'},
    {name: 'Chaleira', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 456.99, category: 'Eletro'},
    {name: 'Vestido', price: 16, category: 'Roupa'},
]

products.map((product) => {
    if(product.category === 'Roupa'){
        product.onSale = true
    }
})


console.log(products)

// 5 - templates literals
const userName = 'Maria'
const age = 19

console.log(`O nome do usuario é ${userName} e tem ${age} anos`)

// 6 - Destructuring 
const frutas = ["maça", "laranja", "mamão"]

const [f1,f2,f3] = frutas

console.log(f1)
console.log(f2)
console.log(f3)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Perifericos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e sua cor é ${color}`)

// 7 - spread operator
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0,...a1,4]
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 125000, price: 39499.99}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car)

// 8 - classe
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}


const shirt = new Product("Camisa", 50)
console.log(shirt)
console.log(`Desconto na ${shirt.name}: R$${shirt.productWithDiscount(10)}`)
console.log(`Desconto de: ${shirt.productWithDiscount(50)}`)

const tenis = new Product("Tenis preto", 458)
console.log(`Desconto no ${tenis.name}: R$${tenis.productWithDiscount(50)}`)

// 9 - herança
class ProductWithAttributes extends Product{
    constructor(name, price, colors){
        super(name,price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        });
    }
}

const hat = new ProductWithAttributes("Chapeu", 29.99, ["Preto", "Azul", "Verde"])
console.log(hat)
console.log(`Desconto de: ${hat.productWithDiscount(35)}`)
console.log(hat.showColors())
// sem o undefined
hat.showColors()