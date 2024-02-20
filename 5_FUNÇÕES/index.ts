// funções sem retorno
// 1 - void 
// void = não retorna nada
function withoutReturn():void{
    console.log("está função não tem retorno!")
    //return 1 - Type 'number' is not assignable to type 'void'.
}

withoutReturn()

// 2 - callback como argumento - DUVIDA
function greeting(name: string){
    return `Olá ${name}`
}

function preGreeting(f: (name:string) => string, username:string){
    console.log("Preparando a função")
    const greet = f(username)
    console.log(greet)
}

preGreeting(greeting, "Maria")

// 3 - generic function
// Eles são uma maneira de dizer aos nossos componentes (funções, classes ou interfaces) o tipo que queremos usar quando executarmos esse pedaço de código
// Os genéricos nos permitem escrever uma função que pode assumir qualquer tipo e transformar nossa função com base nesse tipo.

// function firstElement(arr){ - Parameter 'arr' implicitly has an 'any' type
// parametro tem que ser um T e o retorno tem que ser um T
// o T fala que pode ser qualquer coisa
function firstElement<T>(arr: T[]): T{
    return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement(["a", "b", "c"]))

function mergeObjects<U,T>(obj1: U, obj2: T){
    return{
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Matheus"}, {age: 30, job: "Programmer"})
console.log(newObject)

// 4 - constraints

function biggestNumber<T extends number | string>(a:T, b:T):T{
    let biggest: T

    // para fazer a conversão para num, utiliza o +
    if (+a>+b){
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5,6))
console.log(biggestNumber("4", "5"))

// 5- especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}
console.log(mergeArrays([1,2,3], [5,6]))
// para aceitar mais de um tipo
console.log(mergeArrays<number | string>([1,2,3], ["teste", "teste"]))

// 6 - parametros opicionais
function modernGreeting(name:string, greet?:string){
    if(greet){
        return `Olá ${greet} ${name} tudo bem?`
    } else{
        return `Olá ${name} tudo bem?`
    }
}

console.log(modernGreeting("Maria"))
console.log(modernGreeting("Eduarda","Maria"))

// 7 - parametros default
function somaDefault(n: number, m = 10): number{
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(10,12))


// 8 - Unknown (aceita varios tipos de dados)
// Não deixa ser executado se não houver uma validação de tipo

function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    } else if(typeof x === "number"){
        console.log("X é um número")
    }
}

doSomething([5,6,7])
doSomething(5)

// 9 - never (utilizado quando não retorna nada, como o VOID)
// function showErrorMessage(msg: string): void - Semelhante
function showErrorMessage(msg: string): never{
    throw new Error(msg)
}

//showErrorMessage("Algum erro!") - está dando certo mas tem que deixar comentado se não o codigo abaixo para de funcionar

// 10 - rest parameters
// ...n é para mostrar que pode ser muitos números
function sumAll(...n: number[]) { // array de number
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5))
console.log(sumAll(5,362,658))
// console.log(sumAll("teste")) - Argument of type 'string' is not assignable to parameter of type 'number'.


// 11 - Destructuring como parametros
// precisa determinar o tipo de cada dado que será desestruturado
// é muito utilizado para deixar mais simples e a sintaxe fica bem mais limpa, não precisa por tipo product.name
function showProductDetails({name,price}: {name:string, price:number}): string{
    return `O nome do produto é ${name} e seu preço é R$ ${price}`
}

const shirt = {name: "Camisa", price: 58.60}
console.log(showProductDetails(shirt))