const {TeamInfo}=require('../models/Team');

const saveTeam=async(teamObj){

    try{

        let team=new TeamInfo(teamObj);
        await team.save();

        return team;

    }catch(err){
        console.log(err);
    }

}

const allTeams=async(user_id)=>{

    try{
        let team=TeamInfo.find({'user_id':user_id});

      }catch(err){
          console.log(err);
      }

}

const findTeam=async(id)=>{

    try{
        let team=TeamInfo.find({'_id':id});

      }catch(err){
          console.log(err);
      }

}

module.exports={
    saveTeam,
    findTeam,
    allTeams
}