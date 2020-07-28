const router = require('express').Router()
// const Users = require('../auth/auth-model')
// const Diners = require('./diners-model')

router.get('/', (req, res) => {
    res.status(200).json({error: false, message:'available endpoints for diners /'})
})

module.exports = router