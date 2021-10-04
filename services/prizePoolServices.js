const { MongoExpiredSessionError } = require('mongoose/node_modules/mongodb');
const {PrizePoolInfo}=require('../models/PrizePool');
const {TeamPrizePoolInfo}=require('../models/TeamPrizePool');


 const savePrizePool=async(data)=>{
     try {
         let poolData= await PrizePoolInfo.insertMany(data);
         return poolData;
        } 
        catch (e)
         {
          console.log(e);
        }
 }

 const checkPool=async()=>{
     let PoolCount=await PrizePoolInfo.find({}).count();
      return PoolCount;
 }

 const findPoolById=async(id)=>{
    try
    {
      let pool=await PrizePoolInfo.find({'_id':id});
  
    }catch(e){
      console.log(e);
    }
  }

  const updatePool=async(id,total)=>{
      try{

            let pool=await PrizePoolInfo.updateOne({'_id':id},{$set:{total_teams:total}});
            return pool;
      }catch(e){
          console.log(e);
      }
  }

  const fetchPools=async()=>{
      try{
           return await PrizePoolInfo.find({});
      }catch(e){
          console.log(e)
      }
  }

 module.exports={savePrizePool,
                 checkPool,
                 findPoolById,
                 updatePool,fetchPools}