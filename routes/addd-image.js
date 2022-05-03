var express = require('express');
var router = express.Router();
const fs = require('fs');
const imagesService = require("../services/images.service");

/* GET users listing. */
router.post('/add-image', async function(req, res, next) {
  const body = req.body;
   const imageName = await uploadImage(body.imageUrl, body.fileName);
   const newBody = {
     image: 'uploads/' + imageName,
     thumbImage: 'uploads/' + imageName,
     title: body.title,
     order: null
   }
  await imagesService.saveImages(newBody);
  res.status(200).json('Images Saved Successfully');
});

router.post('/save-pagedata', async function(req, res, next) {
  const body = req.body;
  await imagesService.updatePageData(body.pageDataId, body);
  res.status(200).json('Page Data Saved Successfully');
});


router.get('/getAllImages', async function(req, res, next) {
  let images = await imagesService.getAllImages();
    res.send(images);

});

router.get('/getPageData', async function(req, res, next) {
  let pageData = await imagesService.getPageData();
    res.send(pageData);
});

router.delete('/deleteImage/:imageId', async function(req, res, next) {
  const params = req.params;
  await imagesService.deleteImage(params.imageId);
  res.status(200).json('Image Deleted Successfully');
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
