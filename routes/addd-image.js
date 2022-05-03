var express = require('express');
var router = express.Router();
const fs = require('fs');
const imagesService = require("../services/images.service");

/* GET users listing. */
router.post('/add-image', async function(req, res, next) {
  const body = req.body;
   console.log(req.body);
   const imageName = await uploadImage(body.imageUrl, body.fileName);
   console.log(imageName);
   const newBody = {
     image: 'uploads/' + imageName,
     thumbImage: 'uploads/' + imageName,
     title: body.title,
     order: null
   }
   console.log(newBody);
  await imagesService.saveImages(newBody)
  res.send('Images Saved Successfully');
});


router.get('/getAllImages', async function(req, res, next) {
  let images = await imagesService.getAllImages();
    res.send(images);

});


const uploadImage = async(imageUrl, fileName) => {
  var matches = imageUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
  response = {};

  if (matches.length !== 3) {
      return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');
  let decodedImg = response;
  let imageBuffer = decodedImg.data;
  try {
      const imageName = fileName;
      fs.writeFileSync( "./uploads/" + fileName, imageBuffer, 'utf8');
      return imageName;
  } catch (e) {
      console.log(e);
  }
};

module.exports = router;
