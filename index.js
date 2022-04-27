const express = require('express')
const server = express()
const port = 8088
const bodyParser = require('body-parser')


//configurando express
    server.use(express.text())

//configurando o bodyparser
    server.use(bodyParser.urlencoded({extended:false}))
    server.use(bodyParser.json())

//configurando a view engine
    server.set('view engine','ejs') //definindo a view engine

 //definindo a pasta de arquivos staticos
    server.use(express.static('public'))


//rotas

    server.get('/',(req,res)=>{




        res.render("index")
    })

    server.get('/perguntas',(req,res)=>{
        res.render(`perguntar`)
    })

    server.post(`/salvarPergunta`, (req,res)=>{
        let titulo = req.body.titulo
        let descricao = req.body.descricao
        res.send(`formulário recebido! <br> titulo: ${titulo} descricao: ${descricao}`)
    })


    // query params
    server.get('/perfil/:nome?/:lang?',(req,res)=>{
        let nome=req.params.nome
        let lang=req.params.lang
        let produtos = [
            {nome:'leite',preco:3.40},
            {nome:'doritos',preco:8.20},
            {nome:'sandalia',preco:40}
        ]
        let exibirMsg=true

        res.render('perfil/perfil',{
            nome: nome,
            lang: lang,
            msg:exibirMsg,
            produtos:produtos
        })
    })







server.listen(port,(err)=>{
    if(err) console.log(err)
    console.log(`\nO servidor está rodando na porta ${port}\n`)
})