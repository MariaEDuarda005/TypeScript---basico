// 1 - exemplo decorator
function myDecorator() {
    console.log("iniciando decoator!")
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {

        console.log("Executando")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)

    }
}

class myClass {
    name!: string

    @myDecorator()
    testing() {
        console.log("terminando o metodo de execução")
    }
}

const myObj = new myClass()
myObj.testing()

// 2 - multiplos decorators
function a(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou a") 
    }
}

function b(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou b") 
    }
}

function c(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou c") 
    }
}

class MultiplosDecorators{
    // ele executa o mais abaixo primeiro
    // a ordem no console vai ficar b a c 
    @c()
    @a()
    @b()
    testing(){
        console.log("terminando a execução")
    }
}

const multiple = new MultiplosDecorators()
multiple.testing()

// 3 - class decorator (decorator de classe)