const mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    number:{
        type:String,
        required:true
    }
});


var Contact = mongoose.model('Contact' ,ContactSchema);

module.exports = Contact;