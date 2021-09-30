const {WalletInfo}=require('../models/Wallet');
var randomToken = require('random-token');
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const abi = require("../artifacts/contracts/MyNFT.json");
const contractAddress = "0xF3188651E5AEbe3364314209D77C0D29BcDEFaA1";
const nftContract = new web3.eth.Contract(abi, contractAddress);


const saveData=async(walletOBJ)=>{
    try{

      let wallet= new WalletInfo(walletOBJ);
       await wallet.save();
    }catch(err){
        console.log(err);
    }
}

const findById=async(id)=>{
    try{

        let data=await WalletInfo.find({});
        return data;
      }catch(err){
        console.log(err);
    }
}

const findByUserID=async(id)=>{
    try{

        let data=await WalletInfo.find({user_id:id});
        return data;
      }catch(err){
        console.log(err);
    }
}

const findByWalletAddress=async(address)=>{
    try{

        let data=await WalletInfo.find({wallet_address:address});
        
        return data;
      }catch(err){
        console.log(err);
    }
}
const updateBalance=async(address,balance)=>{
    try{
        await WalletInfo.updateOne({'wallet_address':address},{$set:{nft_balance:balance}});

    }catch(err){
        console.log(err);
    }
}
const getNftBalance=async(address)=>{
  
        let wallet_address=req.query.wallet.trim();
        const nftcontract= new web3.eth.Contract(abi , address);
        //console.log(nftcontract);
        try{
            const balance = await nftcontract.methods.balanceOf(wallet_address).call({
                from :"0xd5aD3244F8a85D6916B8472Ff7C5b3201d2164ed",
                gas:500000
              });
              console.log('balance  is',balance);
        
              return balance;
    
        }catch(err){
           console.log(err)
        }
    
  }

  const getNFTToken=async(wallet_address)=>{
    
    const nftcontract= new web3.eth.Contract(abi , address);
    //console.log(nftcontract);
    try{
        const balance = await nftcontract.methods.tokensOwned(wallet_address).call({
            from :"0xd5aD3244F8a85D6916B8472Ff7C5b3201d2164ed",
            gas:500000
          });
          console.log('balance  is',balance);
    
          res.send(balance);

    }catch(err){
       console.log(err)
    }
}

module.exports={
    saveData,
    findById,
    findByUserID,
    findByWalletAddress,
    getNftBalance,
    updateBalance
}