require("dotenv").config()
const authRouter = require("express").Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('./auth-model')

const {checkUsername, checkEmail, checkPassword} = require("./auth-middleware")



//POST /register-operator
authRouter.post('/register-operator', checkUsername, checkEmail, checkPassword, (req, res) => {
    // res.status(201).json({error: false, message: "post register"})
    req.body.password = bcrypt.hashSync(req.body.password, 8)
    const credentials = { 
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    Users.addUser(credentials)
        .then(async user => {
            const token = await generateOperatorToken(user)

            res.status(201).json({error: false, message: "Operator successfully registered", token})
        })
        .catch(err => {
            res.status(400).json({error: true, message: "Could not register operator.", err})
        })
})


//POST /register-diner
authRouter.post('/register-operator', (req, res) => {
    res.status(201).json({error: false, message: "post register"})
})

//POST /login
authRouter.post('/login', (req, res) => {
    res.status(200).json({error:false, message: "post login"})
})

//Token generation

function generateOperatorToken(operator){
    const payload = {
        username: operator.username,
        role: 'operator'
    };

    const secret = process.env.JWT_SECRET || 'this is a secret'

    const options = {
        expiresIn: 60 * 60 * 8
    }

    console.log(payload)
    return jwt.sign(payload, secret, options)
}


module.exports = authRouter