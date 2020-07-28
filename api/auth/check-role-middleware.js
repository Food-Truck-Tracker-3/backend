module.exports = role => {
    return function (req, res, next){
        if(role === req.jwt.role){
            next()
        } else {
            res.status(403).json({message: "you do not have the necessary role"})
        }
    }
}