
const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});


//Endpoint Obtener Productos

app.get('/productos', (req, res) => {
    res.json([
        { nombre: "Pizza", precio: 120 },
        { nombre: "Hamburguesa", precio: 90 }
    ]);
});

//Endpoint Crear pedido

app.post('/pedido', (req, res) => {
    const pedido = req.body;
    res.json({
        mensaje: "Pedido recibido",
        pedido
    });
});

//Endpoint Obtener pedidos

let pedidos = [];

app.post('/pedido', (req, res) => {
    pedidos.push(req.body);
    res.json({ mensaje: "Pedido guardado" });
});

app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

