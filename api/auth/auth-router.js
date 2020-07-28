require("dotenv").config()
const authRouter = require("express").Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('./auth-model')

const {checkUsername, checkEmail, checkPassword} = require("./auth-middleware")


authRouter.get("/", (req, res) => {
    res.status(200).json({error:false, message:"available endpoints POST: /register-operator, POST: /register-diner, POST: /login"})
})


//POST /register-operator
authRouter.post('/register-operator', checkUsername, checkEmail, checkPassword, (req, res) => {
    // res.status(201).json({error: false, message: "post register"})
    req.body.password = bcrypt.hashSync(req.body.password, 8)
    const credentials = { 
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: 'operator'
    }

    Users.addUser(credentials)
        .then(async user => {
            const token = await generateToken(user)
            res.status(201).json({error: false, message: "Operator successfully registered", token})
        })
        .catch(err => {
            res.status(400).json({error: true, message: "Could not register operator.", err})
        })
})


//POST /register-diner
authRouter.post('/register-diner', checkUsername, checkEmail, checkPassword, (req, res) => {
    // res.status(201).json({error: false, message: "post register"})
    req.body.password = bcrypt.hashSync(req.body.password, 8)
    const credentials = { 
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: 'diner'
    }

    Users.addUser(credentials)
        .then(async user => {
            const token = await generateToken(user)

            res.status(201).json({error: false, message: "Diner successfully registered", token})
        })
        .catch(err => {
            res.status(400).json({error: true, message: "Could not register diner", err})
        })
})


//POST /login
authRouter.post('/login', checkUsername, checkPassword, (req, res) => {
    Users.findBy({username: req.body.username})
        .then(async user => {
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const token = await generateToken(user)

                    res.status(200).json({error:false, message: "user successfully logged in", token, data:user})
                } else {
                    res.status(400).json({error: true, message: "invalid password"})
                }
            } else {
                res.status(400).json({error: true, message: "invalid username"})
            }
        })
        
})

//Token generation

function generateToken(payload){
    // const payload = {
    //     username: user.username,
    //     role: user.role
    // };

    const secret = process.env.SECRET_JWT

    const options = {
        expiresIn: 60 * 60 * 8
    }
    
    delete payload.password
    console.log(payload)
    return jwt.sign(payload, secret, options)
}


module.exports = authRouter