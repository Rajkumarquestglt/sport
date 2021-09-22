const {TeamInfo}=require('../models/Team');
var randomToken = require('random-token');
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const abi = require("../artifacts/contracts/MyNFT.json");
const contractAddress = "0xca5cF677cEccf10C50040A89B5bDb56D48c84B21";
const nftContract = new web3.eth.Contract(abi, contractAddress);

const saveTeam=async(teamObj)=>{

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

const buyTeam=async(address,user_id)=>
  {

        const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
       
        //the transaction
       
        let urlString="http://bafybeibdrp27xylaqa4xlqrbm77ftgicx6uaxllugjn2e6hu6x656qnzcq.ipfs.localhost:8080/";
        var token =Math.floor(Math.random() * 10000); //Math.floor(Math.random() * (152000 -1500 + 1)) + 150;
         token=BigInt(token);
         console.log(address);
         console.log(token);
        var tx="";
        try
         {
           tx = {
            'from': PUBLIC_KEY,
            'to': contractAddress,
            'nonce': nonce,
            'gas': 500000,
            'maxPriorityFeePerGas': 1999999987,
            'data': nftContract.methods.awardItem(address,token,urlString).encodeABI()
          };
           
         }catch(err){
          console.log(err);
        }
       
      
        const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
        signPromise.then((signedTx) => {
      
          web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
            if (!err) {
              console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!"); 
            } else {
              console.log("Something went wrong when submitting your transaction:", err)
            }
          });
        }).catch((err) => {
          console.log("Promise failed:", err);
        });
      

}

module.exports={
    saveTeam,
    findTeam,
    allTeams,
    buyTeam
}