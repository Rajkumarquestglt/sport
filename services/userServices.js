const { hashSync } = require("bcryptjs");
const {UserInfo} =require('../models/userModel');


const fetchUsers=async()=>{

   try
    {
      const user=await UserInfo({});
    }catch(err)
     {
       console.log(err);
     } 

}

const saveUser=async(userObject)=>{
  
    try {
        const user = new UserInfo(userObject);
        await user.save();
        return user;
      } catch (error) {
        console.log(error)
        return null;
      }
  
}

const findUser=async(id)=>{

    try{
        let user=await UserInfo.find({'_id':id});

     }catch(err){
        console.log(err);
    }

}

const findUserByWallet=async(wallet)=>{

      try{
          let user =await UserInfo.find({'wallet_address':wallet});
          return user;
      }catch(err){
          console.log(err);
      }
}

module.exports={
    fetchUsers,
    saveUser,
    findUser,
    findUserByWallet
}