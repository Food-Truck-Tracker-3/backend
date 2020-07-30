const router = require('express').Router()
// const Users = require('../auth/auth-model')
const Diners = require('./diners-model')
// const Trucks = require('../operators/operators-model')
const {checkUser} = require('./diners-middleware')


router.get('/trucks', (req, res) => {
    // res.status(200).json({error: false, message:'available endpoints for operators /trucks'})
    Diners.findTrucks()
        .then( trucks => {
            res.status(200).json(trucks)
        })
        .catch( err => {
            res.status(500).json(err)
        })
})

router.get('/trucks/:id', (req, res) => {
    // res.status(200).json({error: false, message:'available endpoints for operators /trucks'})
    const id = req.params.id 
    Diners.findTruckById(id)
        .then( trucks => {
            res.status(200).json(trucks)
        })
        .catch( err => {
            res.status(500).json(err)
        })
})

//add review
router.post('/trucks/:id/review', (req, res)=>{
    const review = req.body
    const truck_id = req.params.id
    const diner_id = req.token.id

    Diners.addReview(review, truck_id, diner_id)
        .then(truck => {
            res.status(200).json(truck)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})




module.exports = router