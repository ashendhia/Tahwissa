const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const db = process.env.MONGODB_URI;

var storage = new GridFsStorage({
  url: db,
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "images",
      filename: `${file.originalname}`
    };
  }
});

var uploadFiles = multer({ storage: storage }).array("file", 12);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;