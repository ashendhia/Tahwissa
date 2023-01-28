const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const { connectToDatabase } = require('./utils/db')
const cors = require('cors')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const regionsRouter = require('./controllers/regions')
const wilayasRouter = require('./controllers/wilayas')
const sitesRouter = require('./controllers/sites')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

logger.info('connecting to', config.DATABASE_URL)

const start = async () => {
    await connectToDatabase()
}

start()

app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

//app.use('/api/images', imagesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/regions', regionsRouter)
app.use('/api/wilayas', wilayasRouter)
app.use('/api/sites', sitesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

/*mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })
    //app.use(express.static('build'))
*/