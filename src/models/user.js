const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique:true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email format incorrect');
            }
        },
        trim: true,
        lowercase:true
    },
    password:{
        type: String,
        required:true,
        trim:true
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;