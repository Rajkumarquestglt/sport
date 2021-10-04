const mongoose=require('mongoose');

const validator=require('validator');

const bcrypt = require('bcryptjs');

const TeamPrizePoolSchema=new mongoose.Schema({

    user_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    
    team_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'teams' }],
    
    prize_pool_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'prize_pools' }],
    score:{
        type:String,
        default:new Date()
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

var TeamScoreInfo =  mongoose.model('team_scores',TeamScoreSchema);

module.exports = {TeamScoreInfo:TeamScoreInfo};

