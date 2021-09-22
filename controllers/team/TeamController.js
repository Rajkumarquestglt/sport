const { hashSync } = require("bcryptjs");
const teamServices=require('../../services/teamServices');
const userServices=require('../../services/userServices');

const index=async(req,res)=>{
    let teams=await teamServices.allTeams();

}

const buyTeam=async(req,res)=>{
    
    let user=await userServices.findUserByWallet(wallet_address);
    if(user){
        let teamOBJ={user_id:user._id,team_no};
        let team=await teamServices.saveTeam(teamOBJ);
      }else{
          let userOBJ={name:wallet_address,
                       wallet_address:wallet_address,
                       password:};
          let user=await userServices.saveUser(userOBJ);
      }
   
}

module.exports={
    index,
    buyTeam
}