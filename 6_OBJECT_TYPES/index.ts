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