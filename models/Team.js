const mongoose=require('mongoose');

const validator=require('validator');

const bcrypt = require('bcryptjs');

const TeamSchema=new mongoose.Schema({

    user_id:{
        type:String,
        default:null,
    },
    team_no:{
        type:String,
        default:null,
    },
    created_at:{
        type:String,
        default:new Date()
    },
    updated_at:{
        type:String,
        default:null
    }
})

var TeamInfo=mongoose.Schema('teams',TeamSchema);

module.exports = {TeamInfo:TeamInfo};


