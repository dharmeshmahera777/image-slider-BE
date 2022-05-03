const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * User Schema
 */
var ImagesSchema = new Schema({
    image: {
        type: String,
        trim: true,
        required: true
    },
    thumbImage: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    order: {
        type: Number,
        default: null  
    }
});


const Images = mongoose.model('Images', ImagesSchema);

module.exports = Images;