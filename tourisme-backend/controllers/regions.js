const regionsRouter = require('express').Router()
const { request, response } = require('express')
const { userExtractor, regionFinder } = require('../utils/middleware')
const { Region } = require('../models')

regionsRouter.get('/', async (request, response) => {
    const regions = await Region.findAll()
    response.json(regions)
})

regionsRouter.post('/', userExtractor, async (request, response) => {
    const user = request.user

    if (user.username === "admin") {
        const region = await Region.create(request.body)
        response.json(region)
    }
    else {
        response.status(403).end()
    }
})

regionsRouter.get('/:id', regionFinder, async (request, response) => {
    if (request.region) {
        response.json(request.region)
    } else {
        response.status(404).end()
    }
})

regionsRouter.delete('/:id', userExtractor, regionFinder, async (request, response) => {
    if (!request.region) {
        response.status(404).end()
    }
    else {
        const user = request.user
        if (user.username === "admin") {
            await request.region.destroy()
            response.status(204).end()
        } else {
            response.status(403).end()
        }
    }
})

/*regionsRouter.put('/:id', async (request, response) => {
    if (request.region) {
        region.important = request.body.important
        await region.save()
        response.json(request.region)
    } else {
        response.status(404).end()
    }
})*/

module.exports = regionsRouter