const galoRouter = require('express').Router()

galoRouter.get("/", (req, res) => {
    const trucks = [{
        operator_id: 1, 
        name: "Biscuit Boy", 
        description: "Southern Biscuits with a New Mexico Twist", 
        cuisine: "Southern", 
        city: "Albuquerque" , 
        hours:"Breakfast" 
    },
    {
        operator_id: 3, 
        name: "Taco-Rama", 
        description: "All the tacos, all the time" , cuisine: 'Tacos', 
        city: 'Los Angeles' , 
        hours: "All-Day" 
    }]
    res.status(200).json({error:false, message:"unauthenticated get successful", data: trucks})
})

module.exports = galoRouter