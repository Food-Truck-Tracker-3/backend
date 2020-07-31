const server = require('./server')
const supertest = require('supertest')

describe('server', function () {
    it('runs tests', function(){
        expect(true).toBe(true)
    })

    describe("use /", function(){
        it('should respond with 200', function(){
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
        
        it('should respond with: the api is up', function(){
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.body.message).toBe('the api is up')
                })
        })
    } )
})