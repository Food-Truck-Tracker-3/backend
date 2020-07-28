const router = require('express').Router()
// const Users = require('../auth/auth-model')
// const Operators = require('./diners-model')

router.get('/', (req, res) => {
    res.status(200).json({error: false, message:'available endpoints for operators /'})
})

module.exports = router