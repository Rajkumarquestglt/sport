const mongoose=require('mongoose');

const validator=require('validator');

const bcrypt = require('bcryptjs');

const WalletNFTSchema=mongoose.Schema({
    user_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
   
    wallet_address:{
         type:String,
         default:null
      },
     nft_balance:{
        type:String,
        default:null,
    },
    nft_token:{
        type:String,
        default:null,
    },
    tokenURL:{
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

var WalletNFT=mongoose.model('wallet_nft',WalletNFTSchema);

module.exports={WalletNFT:WalletNFT};