
const userServices=require('../../services/userServices');

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

module.exports={
    index,
    createUser,
    login
}
