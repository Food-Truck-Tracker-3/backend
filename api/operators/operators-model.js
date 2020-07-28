const db = require('../../data/db-config')

module.exports ={
    addTruck,
    findTrucks,
    findTruckById,
    removeTruck,
    addTruck,
    updateTruck
}

//finds all trucks
function findTrucks(){
    return db('trucks')
}

//find truck by id
async function findTruckById(id){
    const truck = await db('trucks')
        .where({id})
        .first();

    const menu = await db('menu')
        .where({truck_id: id})
        .select('*')

    const reviews = await db('reviews')
        .join('users', 'reviews.diner_id', 'users.id')
        .where({truck_id: id})
        .select('reviews.*', 'users.username')

    const result = {...truck, menu, reviews};

    return result
}

//adds a truck
// async function addTruck(truck, operatorId){
//     const newTruck = {
//         ...truck, 
//         operator_id: operatorId
//     }

//     await db('trucks').insert(newTruck)

//     return findTrucks()
// }
// const addTruck = async (obj) => {
//     const [id] = await db('trucks').insert(obj).returning("id")
//     return findTruckById(id)
// }

async function addTruck(obj){
    const [id] = await db('trucks').insert(obj).returning("id")
    return findTruckById(id)
}
//removes a truck
async function removeTruck(id){
    await db('trucks')
        .where({id})
        .del()
    return findTrucks()
}

//updates a truck
// async function updateTruck(truck){
//     const [id] = await db('trucks').where({'trucks.id':truck}).update(truck).returning("id")
//     return findTruckById(id)
// }

function updateTruck(changes, id){
  return db('trucks')
  .where({id})
  .update(changes)
  .then(() => {
      return findTruckById(id)
  })
}   