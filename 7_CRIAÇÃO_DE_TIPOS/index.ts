//1 - Generics <>
// aceitar qualquer tipo que precise 
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("Testando generic"))

//2 - constraint em generic
// fazer um aobservação para que o generic tinha um tipo especifico
function showProductName<T extends {name:string}>(obj: T){
    return `O nome do produto é ${obj.name}`
}

// ele aceita por que todos tem a propriedade name
const myObj = {name: "Porta", cor: "Branca"}
const anotherProduct = {name: "Carro", wheels: 4, engine: 1.0}
console.log(showProductName(myObj))
console.log(showProductName(anotherProduct))

//3 - Interface com generics
interface MyObject<T,U,Q>{
    name: string
    wheels: T 
    engine: U
    color: Q
}


type Car = MyObject<number,number, string>
type Pen = MyObject<boolean, boolean,string>

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.4, color: "Branco"}
const MyPen: Pen = {name: "Caneta", wheels: false, engine: false, color: "Roxo"}

console.log(myCar)
console.log(MyPen)

//4 - Type parameters - algum parametro é uma função
// simboliza que K é uma chave de T
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
    //return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32gb'
}

console.log(getSomeKey(server, 'ram'))
//console.log(getSomeKey(server, 'teste')) - Argument of type '"teste"' is not assignable to parameter of type '"ram" | "hd"'

//5 - Keyof type operator
// qualquer chave do objeto vale para o tipo
type Character = {name: string, age: number, hasDriveLicense: boolean}
// um argumento seja umas das chaves de Character, representa todas as chaves desse objeto
type C = keyof Character

function showCharName(obj: Character, name: C): string{
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Maria",
    age: 19,
    hasDriveLicense: false
}

console.log(showCharName(myChar,'name'))

//6 - Typeof type operator
const UserName: string = "Maria"
const UserName2: typeof UserName = "Joao"
// const UserName3: typeof UserName = 51 - Type 'number' is not assignable to type 'string'.
type x = typeof UserName
const UserName4: x = "Joaquim"

//7 - indexed access type
type Truck = {km: number, kg: number, description: string}
// pega uma chave especifica, diferente de Keyof type operator
type km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão de pouca carga"
}

function showKm(km:km){
    console.log(`O veiculo tem a km de ${km}`)
}

const newCar = {
    km: 5000,
    kg: 522
}

showKm(newTruck.km)
showKm(newCar.km)

//8 - Conditional expressions type
interface A {}
interface B extends A {}

interface Teste{
    showName(): string
}

//Se B faz extends em A, se sim (?) o tipo é um number, se não (:) é uma string
type mytype = B extends A ? number : string

const someVar: mytype = 5
//const someVar2: mytype = "teste" - Type 'string' is not assignable to type 'number'.
type myTypeB = Teste extends {showNumber(): number} ? string : boolean // false
type myTypeB2 = Teste extends {showName(): string} ? string : boolean // true

//9 - Template Literals type
type testA = "text"
type CustomType = `some ${testA}`

const testing: CustomType = "some text"

type a1 = "Testando"
type a2 = "Union"

// um tipo baseado em variaveis 
type a3 = `${a1}` | `${a2}`

