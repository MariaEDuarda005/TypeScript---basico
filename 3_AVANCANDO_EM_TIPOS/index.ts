// 1 - ARRAYS

let numbers: number[] = [1,2,3]

numbers.push(5)
console.log(numbers[2])

//numbers = 'teste'

const nomes: string[] = ["Maria", "Eduarda", "Marcela"]

//nomes.push(4) - Argument of type 'number' is not assignable to parameter of type 'string'

//2 - OUTRA SIXTAXE DO ARRAYS

const nums: Array<number> = [100,200]

nums.push(300)
console.log(nums)
console.log(nums[0])

//3 - ANY
// tipagem fraca sendo desenvolvida
const arr1: any = [1, "teste", true, [], {nome: "Maria"}]
console.log(arr1)
arr1.push([1,2,3])

//4 - PARAMETROS TIPADOS

function soma(a:number,b:number){
    console.log(a +b)
}
soma(25,35)

//5 - RETORNO DE FUNÇÃO
function greeting(name:string){
    return `Olá ${name}`
}

console.log(greeting("Maria"))

//6 - FUNÇÕES ANÔNIMAS
setTimeout(function(){
    const sallary: number = 2000
    //console.log(sallary)
    //console.log(parseFloat(sallary)) - declare function parseFloat(string: string): number;
}, 3000)

//7 - TIPOS DE OBJETOS

function passCoordinates(coord: {x: number, y:number}){
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 36, y: 48.6}
passCoordinates(objCoord)

const pessoasObj:{nome:string, surname:string} = {nome:"Maria", surname:"Eduarda"}
console.log(pessoasObj)

//8 - PROPS OPCIONAIS

// quando coloca o ? o parametro fica opcional
// porém o primeiro argumento não pode ser opcional
function showNumbers(a: number, b:number, c?:number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
}

showNumbers(1,2,3)
// ele não vai dar erro pois apesar de ter três parametros um é opicional
showNumbers(4,5)
//showNumbers(1) - An argument for 'b' was not provided.

// 9 - VALIDANDO ARGUMENTO OPICIONAL
function advancedGreeting(firstName:string, lastName?:string){
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Maria", "Eduarda"))
console.log(advancedGreeting("Marcela"))
console.log(advancedGreeting("Guilherme"))

// 10 - unique type 
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R${balance}`)
}

// funciona tanto com num como com string, aceita mais dados
showBalance(100)
showBalance("200")
//showBalance(true) - Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

const arr2: Array <number | string | boolean> = [1, "teste", true]

// 11 - AVANÇANDO EM UNION TYPES
function showUserRole(role: boolean | string){
    if (typeof role === "boolean"){
        return "Usuario não aprovado"
    }
    return `A função do usuario é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - TYPE ALIAS
type ID =  string | number

// automaticamente compila
function showID(id: ID){
    console.log(`O ID é: ${id}`)
}

showID(5)
showID("15")

// 13 - INTERFACE
// abre e fecha chaves e declara a propriedade
interface Point{
    x: number
    y: number
    z: number
}

// function showcoord(obj: {x:number, y:number, z: number}) - jeito mais complicado
function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)