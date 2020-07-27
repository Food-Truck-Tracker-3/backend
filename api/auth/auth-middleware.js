
function checkUsername(req, res, next){
    if(req.body.username){
        if(req.body.username.length < 3){
         res.status(400).json({error:true, message:"username must be at least 3 characters long"})
        } else {
            req.body.username = req.body.username.toLowerCase()
            next()
        }
    } else {
        res.status(400).json({error: true, message: "missing username key in request"})
    }
}

function checkEmail(req, res, next){
    if(req.body.email){
        if(req.body.email.length < 6){
         res.status(400).json({error:true, message:"email must be at least 6 characters long"})
        } else {
            req.body.email = req.body.email.toLowerCase()
            next()
        }
    } else {
        res.status(400).json({error: true, message: "missing email key in request"})
    }
}

function checkPassword(req, res, next){
    if(req.body.password){
        if(req.body.password.length < 6){
         res.status(400).json({error:true, message:"password must be at least 6 characters long"})
        } else {
           
            next()
        }
    } else {
        res.status(400).json({error: true, message: "missing password key in request"})
    }
}

module.exports = {
    checkUsername,
    checkPassword,
    checkEmail
}