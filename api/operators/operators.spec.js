const db = require('../../data/db-config')
const Operators = require('./operators-model')
const request = require('supertest')
const server = require('../../server')


describe('operators', () => {
    let token = ''
    
    beforeAll(async () => {
        await db('users').del()
    })


  
    describe('endpoint testing', () => {
        it ('/api/auth/register-operator should register an operator', ()=> {
            return request(server)
                .post('/api/auth/register-operator')
                .send({username:'virginia', password:"password", email:'va@va.com', role:'operator'})
                .then( res => expect(res.status).toBe(201))
        })

        it('should login', () => {
            return request(server)
                .post('/api/auth/login')
                .send({username:'virginia', password:'password'})
    
                .then(res => {
                    token = res.body.token
                    expect(res.status).toBe(200)
                })
               
        })

        it('should add trucks', () => {
            return request(server)
                .post('/api/operators/trucks')
                .set({authorization: token})
                .send({name: "test truck", cuisine: 'italian'}, {name:'test truck 2', cuisine: "questionable"})
                .then(res => {
                    expect(res.status).toBe(201)
                    
                })
        })

        //NOT WORKING
        // it('should edit a truck', () => {
        //     return request(server)
        //         .put("/api/operators/trucks/1")
        //         .set({authorization: token})
        //         .send({name:'test', cuisine:'american'})
        //         .then(res => {
        //             expect(res.name).toBe('test')
        //         })
        // })

    //    it('should get trucks', () => {
    //        return request(server)
    //             .get('/api/operators/trucks')
    //             .set({authorization:token})
    //             .then(res => expect(res.status).toBe(200))
    //    })
        
    })
        
   
})