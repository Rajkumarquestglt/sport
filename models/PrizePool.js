const mongoose=require('mongoose');

const validator=require('validator');

const bcrypt = require('bcryptjs');

const PrizePoolSchema=new mongoose.Schema({

    user_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    name:{
        type:String,
        default:null
    },
    percentage:{
        type:String,
        default:null,
    },
    pool_total:{
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

