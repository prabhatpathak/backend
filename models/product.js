const mongoose = require('../connection');
const Schema = mongoose.Schema;

const productschema = new Schema({
    name : String,
    price : Number,
    compatibility : Array,
    image_formats : Array,
    size : Number,
    geometry : Number,
    vertices : Number,
    texture : Number,
    image: String,
})

const productmodel = mongoose.model('3dmodels', productschema);

module.exports = productmodel;