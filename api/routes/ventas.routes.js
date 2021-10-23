const express = require('express');
const router = express.Router();

const Ventas = require('../models/ventas');

router.get('/', async (req, res) => {
    const ventas = await Ventas.find();
    res.json(ventas);
});

router.post('/', async (req, res) => {
    const {nombreCliente, cedulaCliente, valorTotalVenta} = req.body;
    const venta = new Ventas({nombreCliente, cedulaCliente, valorTotalVenta});
    await venta.save();
    res.json({status: 'Venta guardada'});
});

router.put('/:id', async (req, res) => {
    const {nombreCliente, cedulaCliente, valorTotalVenta} = req.body;
    const nuevaVenta = {nombreCliente, cedulaCliente, valorTotalVenta};
    await Ventas.findByIdAndUpdate(req.params.id, nuevaVenta);
    res.json({status: 'Venta actualizada'});
});

router.delete('/:id', async (req, res) => {
    await Ventas.findByIdAndRemove(req.params.id);
    res.json({status: 'Venta eliminada'});
});

router.get('/:id', async (req, res) => {
    const productoxId = await Ventas.findById(req.params.id);
    res.json(productoxId);
});

module.exports = router;