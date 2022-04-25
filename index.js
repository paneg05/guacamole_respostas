const express = require('express')
const server = express()
const port = 8088

//configurando a view engine
server.set('view engine','ejs')
server.use(express.static('public'))

server.get('/',(req,res)=>{
    res.render("index")
})

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







server.listen(port,()=>{
    console.log(`O servidor está rodando na porta ${port}`)
})