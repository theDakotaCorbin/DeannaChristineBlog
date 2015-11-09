var mongoose = require('mongoose');



var blogSchema = new mongoose.Schema({
    "title": String,
    "date": String,
    "category": {type: String, enum: ['Fashion, Makeup, Family, Holidays, Tutorial']},
    "blogText": String,
    "mainPic": String,
    "subPic1": String,
    "subPic2": String,
    "subPic3": String
});//PERSON SCHEMA END


module.exports = mongoose.model('Blog', blogSchema);