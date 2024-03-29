const express = require("express");
const router = express.Router();
require("dotenv").config();

const imageUpload = require('./controllers/images/uploadImage');
const persistImage = require('./controllers/images/persistImage');
const retrieveImage = require('./controllers/images/retrieveImage');
const deleteImage = require('./controllers/images/deleteImage');
const updateImage = require('./controllers/images/updateImage');

router.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

//IMAGE CONTROLLER
// Upload image
router.post("/image-upload", imageUpload.imageUpload);
// Persist image
router.post("/persist-image", persistImage.persistImage);
// retrieve image
router.get("/retrieve-image/:cloudinary_id", retrieveImage.retrieveImages);
// delete image
router.delete("/delete-image/:cloudinary_id", deleteImage.deleteImage);
// update image
router.put("/update-image/:cloudinary_id", updateImage.updateImage);


module.exports = router;