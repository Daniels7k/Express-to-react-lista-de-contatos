const express = require("express")
const cors = require("cors")
const app = express()
const Contatos = require("./models/Contatos")

//Cors

app.use(cors())

//BodyParser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//Rotas

app.get("/contatos", async (req, res) => {
    //Buscando dados
    const dados = await Contatos.findAll()

    //Tratando dados
    const contato = dados.map((item) => {
        return (
            {
                id: item.id,
                nome: item.nome,
                numero: item.numero
            }
        )
    })
    //Enviando para o client
    res.status(200).send(contato)
})


app.post("/contatos", async (req, res) => {
    //Salvando no BD
    try {
        await Contatos.create({
            nome: req.body.nome,
            numero: req.body.numero
        })

        res.status(201).redirect("https://daniels7k.github.io/React-Lista-de-Contatos/")
    } catch (error) {
        console.log(error)
        res.status(400)
    }

})

app.post("/contatos/update/:id", async (req, res) => {
    const dados = await Contatos.find({
        where: {id: req.params.id}
    })

    console.log(dados)
})


app.get("/contatos/delete/:id", async (req, res) => {
    await Contatos.destroy({ where: { id: req.params.id } })
    res.status(201).redirect("https://daniels7k.github.io/React-Lista-de-Contatos/")
})


//Escutando Porta
const PORT = process.env.PORT || 4000 
app.listen(PORT, () => {
    console.log("Server running on port: ", PORT)
})