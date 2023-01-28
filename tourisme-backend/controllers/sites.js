const sitesRouter = require('express').Router()
const { request, response } = require('express')
const { userExtractor, siteFinder } = require('../utils/middleware')
const { Site } = require('../models')

const historic = [
    {
        name: "Mosquée Abdellah Ben Salem",
        position: {
            lon: -0.6500103653057514,
            lat: 35.70002065
        },
        wilayaId: 3
    },
    {
        name: "Fort Santiago",
        position: {
            lon: -0.6600562946848137,
            lat: 35.70540845
        },
        wilayaId: 3
    },
    {
        name: "porte de santon",
        position: {
            lon: -0.6566394674242393,
            lat: 35.70579545
        },
        wilayaId: 3
    },
    {
        name: "Chateau Saint Grégroire",
        position: {
            lon: -0.659936190223886,
            lat: 35.7104678
        },
        wilayaId: 3
    },
    {
        name: "Fort lamoune",
        position: {
            lon: -0.6565297239991856,
            lat: 35.713606999999996
        },
        wilayaId: 3
    }
]


sitesRouter.get('/', async (request, response) => {
    const sites = await Site.findAll()
    response.json(sites)
})

sitesRouter.get('/:id', siteFinder, async (request, response) => {
    response.json(request.site)
})

sitesRouter.post('/', userExtractor, async (request, response) => {
    const user = request.user

    if (user.username === "admin") {
        const site = await Site.create(request.body)
        response.status(201).json(site)
    }
    else {
        response.status(403).end()
    }
})

sitesRouter.post('/bulk', userExtractor, async (request, response) => {
    const user = request.user

    if (user.username === "admin") {
        const sites = await Site.bulkCreate(historic)
        response.status(201).json(sites)
    }
    else {
        response.status(403).end()
    }
})

sitesRouter.delete('/:id', userExtractor, siteFinder, async (request, response) => {

    if (!request.site) {
        response.status(404).end()
    }
    else {
        const user = request.user
        if (user.username === "admin") {
            await request.site.destroy()
            response.status(204).end()
        } else {
            response.status(403).end()
        }
    }

})

/*sitesRouter.put('/:id', userExtractor, async (request, response) => {
    const user = request.user
    const body = request.body

    const oldsite = await Site.findById(request.params.id)

    const site = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    }

    if (!oldsite) {
        response.status(404).end()
    }
    else {
        if (user.username === "admin") {
            const updatedSite = await Site.findByIdAndUpdate(request.params.id, site, { new: true })
            response.json(updatedSite)
        } else {
            response.status(403).end()
        }
    }
})*/

module.exports = sitesRouter