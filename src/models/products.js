const mongoose = require('mongoose');
const { number } = require('prop-types');
const {Schema} = mongoose;

const ProductsSchema = new Schema({
    nombre: {type:String, required:true},
    descripcion: {type:String, required:true}
});

module.exports = mongoose.model('Product', ProductsSchema)