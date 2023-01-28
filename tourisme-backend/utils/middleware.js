const logger = require('./logger')
const User = require('../models/user')
const { Region, Wilaya, Site } = require('../models')
const jwt = require('jsonwebtoken')

const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
}

const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        request.token = authorization.substring(7)
    } else {
        request.token = null
    }
    next()
}
const userExtractor = async (request, response, next) => {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    request.user = await User.findByPk(decodedToken.id)
    next()
}

const regionFinder = async (request, response, next) => {
    request.region = await Region.findByPk(request.params.id)
    next()
}

const wilayaFinder = async (request, response, next) => {
    request.wilaya = await Wilaya.findByPk(request.params.id)
    next()
}

const siteFinder = async (request, response, next) => {
    request.site = await Site.findByPk(request.params.id)
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token'
        })
    }

    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    tokenExtractor,
    userExtractor,
    regionFinder,
    wilayaFinder,
    siteFinder,
    errorHandler
}