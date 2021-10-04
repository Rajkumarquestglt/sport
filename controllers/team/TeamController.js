const { hashSync } = require("bcryptjs");
const teamServices=require('../../services/teamServices');
const userServices=require('../../services/userServices');
const prizePoolServices=require('../../services/prizePoolServices');

const index=async(req,res)=>{
    let teams=await teamServices.allTeams();

}

const buyTeam=async(req,res)=>{
    let address=req.query.address;
    console.log(address)
    let user=await userServices.findUserByWallet(address);
    if(user.length>0){
        console.log("user alreadt exist",user);
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

const assignPool=async(req,res)=>{
   
    let pool=await prizePoolServices.fetchPools();
    let poolCount=await prizePoolServices.checkPool();
    let teams=await teamServices.allTeams();
    
   
    console.log(teams)
     try{
          if(teams.length>0){
              teams.forEach( async(team) => {
                let p=Math.floor(Math.random() * 30);
                let selectedPool=pool[p];

                let teamPool=await teamServices.checkTeamPool(team._id);          
                 if(teamPool>0){
                    return;

                 }
                 else
                  {

                    let teamOBJ={ user_id:team.user_id,
                        team_id:team._id,
                        prize_pool_id:selectedPool._id
                       };

                     await teamServices.teamPrizePool(teamOBJ); 
                 } 
              });
          }

          res.send("Prize Pool Assigned");
     }catch(e){
         console.log(e);
     }
}


module.exports={
    index,
    buyTeam,
    assignPool
}