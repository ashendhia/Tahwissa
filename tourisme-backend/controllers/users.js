const usersRouter = require('express').Router()
const { request, response } = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../models')

usersRouter.get('/', async (request, response) => {
    const users = await User.findAll({ attributes: { exclude: ['passwordHash'] } })
    response.json(users)
})


usersRouter.post('/', async (request, response) => {
    const { username, name, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    try {
        const user = await User.create({
            username: username,
            name: name,
            passwordHash: passwordHash
        })
        response.json(user)
    } catch (error) {
        return response.status(400).json({ error })
    }
})

usersRouter.get('/:id', async (request, response) => {
    const user = await User.findByPk(request.params.id)
    if (user) {
        response.json(user)
    } else {
        response.status(404).end()
    }
})

module.exports = usersRouter