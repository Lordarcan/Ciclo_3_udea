const mongoose = require('mongoose');
const { number } = require('prop-types');
const {Schema} = mongoose;

const VentaSchema = new Schema({
    nombreCliente: {type:String, required:true},
    cedulaCliente: {type:String, required:true},
    valorTotalVenta: {type:Number, required:true}
});

module.exports = mongoose.model('Venta', VentaSchema)

