const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        validate: {
            validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        }
    },
    project:[
        {
            degisnation:{
                type:String,
                required:true,
            },
            organization:{
                type:String,
                required:true,
            },
        }
    ],
    
    date: {
        type: Date,
        default: Date.now,
    },
});

let User = mongoose.model('user', UserSchema);

module.exports = User;
