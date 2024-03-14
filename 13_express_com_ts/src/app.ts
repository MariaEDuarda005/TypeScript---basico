// 1 - iniciando projeto
//console.log("Express + TS.");

//2 - init express
import express, {Request,Response} from 'express';

const app = express();

// 3 - rota com post
app.use(express.json()); // para trabalhar com json

// usar para receber ou enviar algo
app.get("/", (req, res) => {
    return res.send("Hello Express!")
})

// 3 - rota com post
// recebe pelo send 
app.post("/api/product", (req,res) => {
    console.log(req.body) // corpo da requisição
    return res.send("Produto adicionado!")
})

// 4 - rota para todos os verbos
app.all("/api/product/check", (req,res) => {
    // req.method = verbo http

    if(req.method === "POST"){
        return res.send("Inseriu algum registro!")
    } else if (req.method === "GET") {
        return res.send("Leu algum registro!")
    } else {
        return res.send("Não podemos realizar esta operação!")
    }

});

//5 - interface do express
app.get("/api/interface", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces")
})

//6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Camisa",
        price: 30.00,
        color: "Blue",
        sizes: ["P", "M", "G"],
    })

    // recebe assim no postman: {"name":"Camisa","price":30,"color":"Blue","sizes":["P","M","G"]}
})

//7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)

    const id = req.params.id

    if(id === "1"){
        const product = {
            id: 1,
            name: "Bone",
            price: 15.30
        }
        // pode enviar o json por meio de variaveis
        return res.json(product);
    }else{
        return res.send("produto não encontrado!")
    }
})

// escolhendo a porta quando ele for executado, e quando for executado exibir uma mensagem 
app.listen(3000, () => {
    console.log("Aplicação funcionado")
})