var mongoose = require('mongoose');



var blogSchema = new mongoose.Schema({
    "title": String,
    "date": String,
    "category": String,
    "blogText": String,
    "mainPic": String,
    "subPic1": String,
    "subPic2": String,
    "subPic3": String
});//BLOG SCHEMA END


module.exports = mongoose.model('Blog', blogSchema);

