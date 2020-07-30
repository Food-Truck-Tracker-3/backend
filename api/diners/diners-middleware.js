const Users = require('../auth/auth-model')
const Diners = require('./diners-model')

function checkUser(req, res, next){
    console.log("body:",req.body)
    console.log("token:",req.token)
   
    if(req.token.id){
        Diners.findById(req.token.id)
            .then(users => {
                console.log(users)
                if(users){
                    console.log('diners middleware findById if')
                    req.body.diner_id = req.token.id
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
module.exports = {
    checkUser
}