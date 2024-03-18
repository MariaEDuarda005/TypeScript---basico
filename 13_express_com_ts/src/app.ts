// 1 - iniciando projeto
//console.log("Express + TS.");

//2 - init express
import express, {NextFunction,Request,Response} from 'express';

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

//8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params)

    const productId = req.params.id
    const reviewId = req.params.reviewId

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`)
})

//9 - rourter handler
function getUser(req: Request, res: Response){
    console.log(`Resgatando o usuario com o id: ${req.params.id}`)
    return res.send("O usuario foi encontrado")
}

app.get("/api/user/:id", getUser

)

//10 - middleware - executar uma função entre a execução de uma rota, podemos utilizar para validações
/*Se a atual função de middleware não terminar o ciclo de solicitação-resposta, 
ela precisa chamar next() para passar o controle para a próxima função de middleware. 
Caso contrário, a solicitação ficará suspensa.*/

function checkUser(req: Request, res: Response, next: NextFunction){
    if(req.params.id === "1"){
        console.log("Pode seguir")
        next() //para mostrar que pode seguir
    }else{
        console.log("Acesso restrito")
    }
}

app.get("/api/user/:id/access", checkUser,(req: Request, res: Response) => {
    return res.json({msg: "Bem vindo a area administrativa"})
})

//11 - middleware para todas as rotas (todo o middleware tem que ter a função next sendo executada para destravar arequisição do usuario)
function showPath(req: Request, res: Response, next: NextFunction){
    console.log(req.path)
    next()
}

app.use(showPath)

app.get("/", (req,res) => { 
    return res.send("Hello Express")
})

//12 - req e res com generics
app.get("/api/user/:id/details/:name", 
    (
        req: Request<{id: string; name:string}>, 
        res: Response<{status: boolean}>
    ) => {
        console.log(`ID: ${req.params.id}`)
        console.log(`Name: ${req.params.name}`)

        return res.json({ status: true })
})

//13 - tratamento de erro, com blocos TRY/CATCH
app.get("/api/error", (req: Request, res: Response) => {
    try{
        throw new Error("Algo deu errado")
    }catch (e: any){
        // any - pois não sabemos o que vai chegar
        // res.statusCode = 500
        res.status(500).json({msg: e.message})
    }
})

// escolhendo a porta quando ele for executado, e quando for executado exibir uma mensagem 
app.listen(3000, () => {
    console.log("Aplicação funcionado")
})