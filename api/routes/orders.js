const express = require('express')
const Orders = require('../models/Orders')

const router = express.Router()

//Obtener un listado de usuarios
router.get('/', (req, res) => {
    Orders.find()
        .exec()
        .then(x => res.status(200).send(x))
})

//Obtener un solo usuario
router.get('/:id', (req, res) => {
    Orders.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))

})

//Agregar un usuarior
router.post('/', (req, res) => {
    Orders.create(req.body).then(x => res.status(201).send(x))
})

//Actualizar un elemento
router.put('/:id', (req, res) => {
    Orders.findOneAndUpdate(req.params.id, req.body)
        .then(x => res.sendStatus(204))

})

router.delete('/:id', (req, res) => {
    Orders.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router