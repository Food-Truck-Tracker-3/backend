const apiRouter = require("express").Router()
const authRouter = require("./auth/auth-router")




apiRouter.use("/auth", authRouter)
// apiRouter.use("/react-1", reactOneRouter)


apiRouter.get("/", (req, res) => {
    res.status(200).json({message: "available endpoints, auth", error: false})
})




module.exports = apiRouter