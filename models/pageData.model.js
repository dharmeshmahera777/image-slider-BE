const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * User Schema
 */
var pageDataSchema = new Schema({
    marquee: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    footer: {
        type: String,
        trim: true,
        required: true
    }
});


const PageData = mongoose.model('PageData', pageDataSchema);

module.exports = PageData;