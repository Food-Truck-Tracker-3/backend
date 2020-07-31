const db = require('../../data/db-config')
const Auth = require('./auth-model')


describe('auth model', () => {
    beforeEach(async () => {
        await db('users').del()
    })

    describe('addUser', () => {
        it('adds a diner to the db', async () => {
            let usersCount
            usersCount = await db('users')
            expect(usersCount).toHaveLength(0)
            await Auth.addUser({username:'Test 1', password:'password', email: "test@one.com", role: "diner"})
            usersCount = await db('users')
            expect(usersCount).toHaveLength(1)
        })

        it('inserts the diner into the db', async () => {
            let user = await Auth.addUser({username:'Test 2', password:'password', email: "test@one.com", role: "diner"})
            expect(user.username).toBe('Test 2')
        })

        it('adds an operatorto the db', async () => {
            let usersCount
            usersCount = await db('users')
            expect(usersCount).toHaveLength(0)
            await Auth.addUser({username:'operator1', password:'password', email: "operator@one.com", role: "operator"})
            usersCount = await db('users')
            expect(usersCount).toHaveLength(1)
        })

        it('inserts the diner into the db', async () => {
            let user = await Auth.addUser({username:'operator2', password:'password', email: "operator@two.com", role: "operator"})
            expect(user.username).toBe('operator2')
        })
        
    })
})