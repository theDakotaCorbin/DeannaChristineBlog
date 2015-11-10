var mongoose = require('mongoose');



var userSchema = new mongoose.Schema({
    "name": String,
    "blog": [{type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}]
});//PERSON SCHEMA END


module.exports = mongoose.model('User', userSchema);
