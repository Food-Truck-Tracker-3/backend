const apiRouter = require("express").Router()
const authRouter = require("./auth/auth-router")
const dinersRouter = require('./diners/diners-router')
const operatorsRouter = require('./operators/operators-router')
const galoRouter = require('./react-1/galo-router')
const olegRouter = require('./react-1/oleg-router')


const restricted = require('./auth/restricted-middleware')
const checkRole = require('./auth/check-role-middleware')


apiRouter.use("/auth", authRouter)
apiRouter.use("/galo", galoRouter)
apiRouter.use("/oleg", olegRouter)
apiRouter.use("/diners", restricted, checkRole("diner"), dinersRouter)
apiRouter.use("/operators", restricted, checkRole("operator"), operatorsRouter)

apiRouter.get("/", (req, res) => {
    res.status(200).json({message: "available endpoints: /auth, /diners, /operators, /oleg, /galo", error: false})
})




module.exports = apiRouter