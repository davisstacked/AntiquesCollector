const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    // intrest:{
    //   [{glass: {type: blu, default: false}}]
    // }

});


module.exports = mongoose.model('User', UserSchema);
