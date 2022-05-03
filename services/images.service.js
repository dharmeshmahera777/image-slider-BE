const ImagesModel = require("../models/images.model");



const saveImages = async(body) => {
    const images = new ImagesModel(body);
    await images.save().then((result) => {
        return result;
    })
}


const getAllImages = async() => {
    const images = await ImagesModel.find();
    images.filter(f => f.image && f.image !== '' && f.image.includes("uploads/")).forEach(m=> m.image = "http://localhost:4000/" + m.image);
    images.filter(f => f.thumbImage && f.thumbImage !== '' && f.thumbImage.includes("uploads/")).forEach(m=> m.thumbImage = "http://localhost:4000/" + m.thumbImage);
    return images;
};

module.exports = {
    saveImages,
    getAllImages
}