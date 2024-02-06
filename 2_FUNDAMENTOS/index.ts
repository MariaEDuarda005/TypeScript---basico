// 1 - numbers
let x:number = 10

console.log(x)

x = 16
console.log(typeof x)

const y:number = 15.36545456
console.log(typeof y)
console.log(y)
console.log(y.toPrecision(3))

// 2 - STRING
const firstName = "Maria"
console.log(firstName.toUpperCase())

let fullName: string
const lastName: string = "Ferreira"

fullName = firstName + " " + lastName

console.log(fullName)
console.log(typeof fullName)

// 3 - BOOLEAN

let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// 4 - INFERENCE AND ANNOTATION

let ann: string = "Teste" // annotation
let inf = "Teste" // inference

// vai dar erro:
// ann = 1
// inf = 1


// 5 - DESAFIO 2

let num: number = 10

console.log(typeof num)
console.log(typeof num.toString())

    // Jeito dele

const n1: number = 10
const numberString = n1.toString()
const printMyNumber: string = `Eu vou imprimir o número ${numberString}`
console.log(printMyNumber)