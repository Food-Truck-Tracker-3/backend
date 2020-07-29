const db = require('../../data/db-config')

module.exports ={
    addTruck,
    findTrucks,
    findTruckById,
    removeTruck,
    addTruck,
    updateTruck,
    findOperatorTrucks,
    findFullTrucks
}

//finds all trucks
function findTrucks(){
    return db('trucks')
}
//A fully detailed list of all trucks
async function findFullTrucks(){
    
    const trucks = await db('trucks')
        .innerJoin('menu', 'trucks.id', 'menu.truck_id')
        .innerJoin('reviews', 'trucks.id', 'reviews.truck_id')
        .select(['trucks.*', db.raw('json_agg(menu.* ) as menu'), db.raw('json_agg(reviews.*) as reviews') ])
        .groupBy('trucks.id')

    return trucks
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

//get all trucks for an operator
 function findOperatorTrucks(id){
    return db('trucks')

        .join('users', 'users.id', 'trucks.operator_id')
        .select('*')
        .where({operator_id:id})
 }

//adds a truck
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