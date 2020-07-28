const Operators = require('./operators-model')
const Users = require('../auth/auth-model')

function checkUser(req, res, next){
    console.log("body:",req.body)
    console.log("token:",req.token)
   
    if(req.token.id){
        Users.findById(req.token.id)
            .then(users => {
                console.log(users)
                if(users){
                    console.log('operators middleware findById if')
                    req.body.operator_id = req.token.id
                        next()
                     
                }else{
                    res.status(400).json({error: true, message: "could not find user"})
                }  
            })
            .catch(err => {
                res.status(400).json({error: true, message: "database error in checkUser middleware", err})
            })
    } else {
        res.status(400).json({error: true, message: "missing users key in request"})
    }
}


function checkTruck(req, res, next){
    const id = req.params.id 
    Operators.findTruckById(id)
        .then( truck => {
            if(req.token.id === truck.operator_id){
                console.log(req.token)
                console.log(truck)
                next()
            } else {
                res.status(400).json({error: true, message:"you are not the owner of this truck"})
            }
        })
        .catch( err => {
            res.status(500).json(err)
        })
}
module.exports = {
    checkUser,
    checkTruck
}