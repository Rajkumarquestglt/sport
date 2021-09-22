
const userServices=require('../../services/userServices');
const teamServices=require('../../services/teamServices');
const index=async(req,res)=>{
    let users=await userServices.fetchUsers();
}

const createUser=async(req,res)=>{
    const userobj={

    }

    try
     {
        let user=await userServices.saveUser(userobj);
        
      }catch(err){
          console.log(err);
      }
}

const login=async(req,res)=>{
     let wallet_address=req.body.wallet_address;

     let user=await userServices.findUserByWallet(wallet_address);
    
     if(user){

        res.send(user);

     }else
      {
          let userOBJ={};
          let user=await userServices.saveUser(userOBJ);
          res.send(user);
      }
           
}

const buyTeam=async(req,res)=>{
    let address=req.query.address;
    let team=await teamServices(address);
    res.send(team);
}

module.exports={
    index,
    createUser,
    login
}
