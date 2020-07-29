const router = require('express').Router()
// const Users = require('../auth/auth-model')
// const Diners = require('./diners-model')
const Trucks = require('../operators/operators-model')


router.get('/trucks', (req, res) => {
    // res.status(200).json({error: false, message:'available endpoints for operators /trucks'})
    Trucks.findFullTrucks()
        .then( trucks => {
            res.status(200).json(trucks)
        })
        .catch( err => {
            res.status(500).json(err)
        })
})

module.exports = router