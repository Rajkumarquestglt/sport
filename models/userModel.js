const moongoose = require('mongoose');

const validator = require('validator');

const bcrypt = require('bcryptjs');

const UserSchema= new moongoose.Schema({
    name:{
         type:String,
         default:null
    },
    email:{
         type:String,
         default:null
    },
    wallet_address:{
        type:String,
        default:null
    },
    email_veryfied:{
        type:Boolean,
        default:false,
    },
    password:{
        type:String,
        default:null,
         },
    user_role:{
     type:String,
     enum: ['user','admin'],
     default:'user'
    },
    
    created_at:{
        type:String,
        default:new Date()
    },
    updated_at:{
        type:String,
        default:null
    }
});

var UserInfo =  moongoose.model('users',UserSchema);

module.exports = {UserInfo:UserInfo};
