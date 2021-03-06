const express = require('express')
const server = express()
const port = 8088
const bodyParser = require('body-parser')
const connection = require('./database/database')
const perguntaModel = require('./database/Pergunta')
const pergunta = require('./database/Pergunta')


//configurando banco de dados
connection.authenticate().then(()=>{
    console.log(`\nconexão feita com banco de dados !\n`)
}).catch((err)=>{
    console.log(`\nerro ao se conectar ao banco de dados ${err}\n`)
})

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

        pergunta.create({
            titulo:titulo,
            descricao:descricao
        }).then(()=>{
            res.redirect('/')
        })
        
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