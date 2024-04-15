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