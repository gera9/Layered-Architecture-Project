const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    
    title: {
        type: String,
        required: true,
    },

    authors: {
        type: String,
        required: true,
    },

    publisher: {
        type: String,
        required: true,
    },

    publishedDate: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    previewLink: {
        type: String,
        required: true,
    }
    
}, { versionKey: false });

module.exports = mongoose.model('Book', bookSchema);