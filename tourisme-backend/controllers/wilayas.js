const wilayasRouter = require('express').Router()
const { request, response } = require('express')
const { userExtractor, wilayaFinder } = require('../utils/middleware')
const { Wilaya } = require('../models')

wilayasRouter.get('/', async (request, response) => {
    const wilayas = await Wilaya.findAll()
    response.json(wilayas)
})

wilayasRouter.post('/', userExtractor, async (request, response) => {
    const user = request.user

    if (user.username === "admin") {
        console.log(request.body.regionID)
        const wilaya = await Wilaya.create(request.body)
        response.json(wilaya)
    }
    else {
        response.status(403).end()
    }
})

wilayasRouter.get('/:id', wilayaFinder, async (request, response) => {
    if (request.wilaya) {
        response.json(request.wilaya)
    } else {
        response.status(404).end()
    }
})

wilayasRouter.delete('/:id', userExtractor, wilayaFinder, async (request, response) => {
    if (!request.wilaya) {
        response.status(404).end()
    }
    else {
        const user = request.user
        if (user.username === "admin") {
            await request.wilaya.destroy()
            response.status(204).end()
        } else {
            response.status(403).end()
        }
    }
})

/*wilayasRouter.put('/:id', async (request, response) => {
    if (request.wilayas) {
        wilayas.important = request.body.important
        await wilayas.save()
        response.json(request.wilayas)
    } else {
        response.status(404).end()
    }
})*/

module.exports = wilayasRouter