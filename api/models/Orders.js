//Llamamo a las dependencias que serán usadas
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Creo el segundo modelo para la base de datos (los platillos)
const Orders = mongoose.model('Order', new Schema({
    meal_id: { type: Schema.Types.ObjectId, ref: 'Meal'},
    user_id: String,
}))

//Retorno el modelo
module.exports = Orders