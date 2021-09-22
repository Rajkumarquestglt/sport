const { hashSync } = require("bcryptjs");
const teamServices=require('../../services/teamServices');
const userServices=require('../../services/userServices');

const index=async(req,res)=>{
    let teams=await teamServices.allTeams();

}

const buyTeam=async(req,res)=>{
    let address=req.query.address;
    console.log(address)
    let user=await userServices.findUserByWallet(address);
    if(user){
        
        let teamOBJ=await teamServices.buyTeam(address,user._id);
        let team=await teamServices.saveTeam(teamOBJ);
        res.send(team);

      }else{
          let email=address+'@gmail.com';
          console.log(email);
          let userOBJ={name:address,
                       email:email,
                       wallet_address:address,
                       password:"123"};
          let user=await userServices.saveUser(userOBJ);
          console.log(user);
          let teamOBJ=await teamServices.buyTeam(address,user._id);

          let team=await teamServices.saveTeam(teamOBJ);
          res.send(team);
      }
   
}

module.exports={
    index,
    buyTeam
}