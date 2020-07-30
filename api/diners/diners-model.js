const db = require('../../data/db-config')


module.exports ={
 findTrucks,
 findTruckById,
 addReview
}

function findTrucks(){
    return db('trucks')
}

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

///this wont work
async function addReview(review, truck_id, diner_id) {
   
    await db("reviews")
    .insert({...review, truck_id: truck_id, diner_id: diner_id})
    
    return findTruckById(truck_id)   
  };