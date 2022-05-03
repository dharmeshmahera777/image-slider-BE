const ImagesModel = require("../models/images.model");
const PageDataModel = require("../models/pageData.model");



const saveImages = async(body) => {
    const images = new ImagesModel(body);
    await images.save().then((result) => {
        return result;
    })
}

const savePageData = async(body) => {
    const images = new PageDataModel(body);
    await images.save().then((result) => {
        return result;
    })
}

const updatePageData = async(pageDataId, body) => {
    const result = await PageDataModel.updateOne({ _id: pageDataId }, {
        $set: body
    });
    return result;
}

const getPageData = async() => {
    const pageData = await PageDataModel.find();
    return pageData[0];
}

const deleteImage = async(imageId) => {
    await ImagesModel.remove({ _id: imageId })
    return 'success';
}


const getAllImages = async() => {
    const images = await ImagesModel.find();
    images.filter(f => f.image && f.image !== '' && f.image.includes("uploads/")).forEach(m=> m.image = "https://image-slider-api.herokuapp.com/" + m.image);
    images.filter(f => f.thumbImage && f.thumbImage !== '' && f.thumbImage.includes("uploads/")).forEach(m=> m.thumbImage = "https://image-slider-api.herokuapp.com/" + m.thumbImage);
    return images;
};

module.exports = {
    saveImages,
    getAllImages,
    savePageData,
    getPageData,
    updatePageData,
    deleteImage
}