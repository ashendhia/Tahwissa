const imagesRouter = require('express').Router()
const { request, response } = require('express')
const util = require("util");
const multer = require("multer");
const storage = multer.memoryStorage()
const upload = multer({ storage: storage }).array("file", 12)
const uploadFiles = util.promisify(upload)
const { userExtractor } = require('../utils/middleware')
const Image = require('../models/image')
const Site = require('../models/site')

imagesRouter.get('/', async (request, response) => {
    const images = await Image.find({})
    response.status(200).send(images)
})

imagesRouter.post('/upload/:id', userExtractor, async (request, response) => {
    const user = request.user
    if (user.username === "admin") {
        await uploadFiles(request, response)
        const id = request.params.id
        const site = await Site.findById(id)
        for (let file of request.files) {
            console.log(file)
            const image = new Image({
                index: site.pictures.length,
                img: {
                    data: file.buffer,
                    contentType: file.mimetype
                },
                site: id
            })
            const savedImage = await image.save()
            site.pictures = site.pictures.concat(savedImage._id)
            await site.save().then(console.log(`${image.index} uploaded`))
        }
        response.status(201).send({
            message: "Files have been uploaded.",
        })
    }
    else {
        response.status(403).end()
    }
    /*try {
        await upload(req, res);
        console.log(req.files);

        if (req.files.length <= 0) {
            return res
                .status(400)
                .send({ message: "You must select at least 1 file." });
        }

        return res.status(200).send({
            message: "Files have been uploaded.",
        });

    } catch (error) {
        console.log(error);

        if (error.code === "LIMIT_UNEXPECTED_FILE") {
            return res.status(400).send({
                message: "Too many files to upload.",
            });
        }
        return res.status(500).send({
            message: `Error when trying upload many files: ${error}`,
        });

    }*/
}
)



module.exports = imagesRouter