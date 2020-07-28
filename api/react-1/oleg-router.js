const olegRouter = require('express').Router()

olegRouter.get("/", (req, res) => {
   const trucks = [{
       operator_id: 1, 
       name: "Sopapizza", 
       description: "Delicious Pizza with a sopapilla crust", 
       cuisine: "Italian", 
       city: "Albuquerque", 
       hours:"Lunch"
    },
   {
       operator_id: 1, 
       name: "RoadRunner" , 
       description: "classic New Mexican to-go", cuisine:"New Mexican" , 
       city: "Santa Fe" , 
       hours:"dinner" 
    }]
    res.status(200).json({error:false, message:"unauthenticated get successful", data: trucks})
})

module.exports = olegRouter

