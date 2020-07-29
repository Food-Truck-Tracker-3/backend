const router = require('express').Router()
// const Users = require('../auth/auth-model')
const Operators = require('./operators-model')
const {checkUser, checkTruck} = require('./operators-middleware')


//GET returns a list of all trucks
router.get('/trucks', (req, res) => {
    // res.status(200).json({error: false, message:'available endpoints for operators /trucks'})
    Operators.findTrucks()
        .then( trucks => {
            res.status(200).json(trucks)
        })
        .catch( err => {
            res.status(500).json(err)
        })
})
//find all trucks from an operator
router.get('/trucks/:id/user', (req, res) => {
    const {id} = req.params

    Operators.findOperatorTrucks(id)
        .then(trucks => {
            if(trucks.length){
                res.json(trucks)
            } else {
                res.status(404).json({message: 'could not find trucks for given user'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'failed to get trucks'})
        })
})

router.get('/trucks/:id', (req, res) => {
    // res.status(200).json({error: false, message:'available endpoints for operators /trucks'})
    const id = req.params.id 
    Operators.findTruckById(id)
        .then( trucks => {
            res.status(200).json(trucks)
        })
        .catch( err => {
            res.status(500).json(err)
        })
})

//POST a truck
router.post('/trucks', checkUser, (req, res) => {
    Operators.addTruck(req.body)
        .then(truck => {
            res.status(201).json({error:false, message: "truck added successfully", data:truck})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//PUT truck
// router.put("/trucks/:id", checkUser, checkTruck, (req, res) => {
//     Operators.updateTruck(req.body)
//         .then(truck => {
//             res.status(200).json({error:false, message:'truck updated successfully', data: truck})
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })
// })
router.put('/trucks/:id', checkUser, checkTruck, (req, res) => {
    const {id} = req.params
    const changes = req.body

    Operators.updateTruck(changes, id)
        .then(updatedTruck => {
            res.status(200).json({error:false, message:'update successful', data:updatedTruck})
        })
})
//DELETE truck
// router.delete("/trucks/:id", checkUser, checkTruck, (req, res) => {
//     Operators.removeTruck(req.body)
//         .then(truck => {
//             res.status(200).json({error:false, message:'truck removed'})
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })
// })

router.delete('/trucks/:id', (req, res) => {
    const { id } = req.params;
  
    Operators.removeTruck(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find truck with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete truck' });
    });
  });
module.exports = router