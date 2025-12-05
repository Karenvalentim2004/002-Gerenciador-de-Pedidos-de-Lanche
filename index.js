const express = require('express')
const app = express()

app.get("/", function (req, res) {
    res.send("oiieeeee")
})

let listaDePedidos = [
    {
        id: 1,
        "cliente": "Shawn Mendes",
        "id_cliente": 100,
        "produto": "X-Bacon",
        "preco": 29.90
    },

    {
        id: 2,
        "cliente": "Shawn Mendes",
        "id_cliente": 100,
        "produto": "X-Salada",
        "preco": 25.90
    },

    {
        id: 3,
        "cliente": "Camila Cabello",
        "id_cliente": 101,
        "produto": "X-Frango",
        "preco": 30.00
    }
]

//listar

app.get("/listartodospedidos", function (req, res) {
    res.send(listaDePedidos)
})

//listar um

app.get("/listarpedido/:id", function (req, res) {
    let idInformado = req.params.id
   if(idInformado > listaDePedidos.length){
    res.send("Pedido não encontrado")
   } else{
    let pedidoEncontrado = listaDePedidos.find(pedido => pedido.id == idInformado)
    res.send(pedidoEncontrado)
   }
})


app.listen(3000)
//localhost:3000