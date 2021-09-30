const mongoose=require('mongoose');

const validator=require('validator');

const bcrypt = require('bcryptjs');

const WalletSchema=new mongoose.Schema({

    user_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
   
    wallet_address:{
         type:String,
         default:null
      },
     nft_balance:{
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

var WalletInfo =  mongoose.model('wallets',WalletSchema);

module.exports = {WalletInfo:WalletInfo};

