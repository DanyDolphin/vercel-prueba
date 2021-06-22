//Llamamo a las dependencias que serán usadas
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Creo el primer modelo de la base de datos (los platillos)
const Meals = mongoose.model('Meal', new Schema({
    name: String,
    desc: String,
}))

//Retorno el modelo
module.exports = Meals