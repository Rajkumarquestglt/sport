const mongoose=require('mongoose');

const validator=require('validator');

const bcrypt = require('bcryptjs');

const PrizePoolSchema=new mongoose.Schema({

    name:{
        type:String,
        default:null
    },
    percentage:{
        type:String,
        default:null,
    },
    pool_prize:{
           type:String,
           default:null
    },
    total_teams:{
        type:String,
        default:null
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

var PrizePoolInfo =  mongoose.model('prize_pools',PrizePoolSchema);

module.exports = {PrizePoolInfo:PrizePoolInfo};

