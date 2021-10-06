const Web3 = require('web3');
//const hardhat = require("hardhat");
const { ethers } = require("ethers");
//const { ethers } = require("hardhat");

const userServices=require('../../services/userServices');
const teamServices=require('../../services/teamServices');
const walletServices=require('../../services/walletServices');
const { LazyMinter } =require('../../services/LazyMint');
const web3 = new Web3(
    new Web3.providers.HttpProvider(
       "https://mainnet.infura.io/v3/dc6e11412ff54869b4bb3ce77550d55a"
      )
);

const address = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB';

const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"punksOfferedForSale","outputs":[{"name":"isForSale","type":"bool"},{"name":"punkIndex","type":"uint256"},{"name":"seller","type":"address"},{"name":"minValue","type":"uint256"},{"name":"onlySellTo","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"enterBidForPunk","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"},{"name":"minPrice","type":"uint256"}],"name":"acceptBidForPunk","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addresses","type":"address[]"},{"name":"indices","type":"uint256[]"}],"name":"setInitialOwners","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"imageHash","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextPunkIndexToAssign","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"punkIndexToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"punkBids","outputs":[{"name":"hasBid","type":"bool"},{"name":"punkIndex","type":"uint256"},{"name":"bidder","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"allInitialOwnersAssigned","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"allPunksAssigned","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"buyPunk","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"punkIndex","type":"uint256"}],"name":"transferPunk","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"withdrawBidForPunk","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"punkIndex","type":"uint256"}],"name":"setInitialOwner","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"},{"name":"minSalePriceInWei","type":"uint256"},{"name":"toAddress","type":"address"}],"name":"offerPunkForSaleToAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"punksRemainingToAssign","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"},{"name":"minSalePriceInWei","type":"uint256"}],"name":"offerPunkForSale","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"getPunk","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pendingWithdrawals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"punkIndex","type":"uint256"}],"name":"punkNoLongerForSale","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":true,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"punkIndex","type":"uint256"}],"name":"Assign","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"punkIndex","type":"uint256"}],"name":"PunkTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"},{"indexed":false,"name":"minValue","type":"uint256"},{"indexed":true,"name":"toAddress","type":"address"}],"name":"PunkOffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"fromAddress","type":"address"}],"name":"PunkBidEntered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"fromAddress","type":"address"}],"name":"PunkBidWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"}],"name":"PunkBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"punkIndex","type":"uint256"}],"name":"PunkNoLongerForSale","type":"event"}];
const index=async(req,res)=>{
    let users=await userServices.fetchUsers();
}

const getAvailableBalance=async(req,res)=>{
    let wallet_address=req.query.wallet.trim();
    const nftcontract= new web3.eth.Contract(abi , address);
    //console.log(nftcontract);
    try{
        const balance = await nftcontract.methods.balanceOf(wallet_address).call({
            from :address,
            gas:500000
          });
          console.log('balance  is',balance);
    
          res.send(balance);

    }catch(err){
       console.log(err)
    }
}

const getCryptoPunk=async(req,res)=>{
  //let wallet_address=req.query.wallet.trim();
  const nftcontract= new web3.eth.Contract(abi , address);
  //console.log(nftcontract);
  let users=await userServices.users();

     users.forEach(async(user) => {

      try{
        const balance = await nftcontract.methods.balanceOf(user.wallet_address).call({
            from :address,
            gas:500000
          });
          console.log('balance  is',balance);
          
          await walletServices.updateBalance(user._id,user.wallet_address,balance);
          
           //res.send(balance);

        }catch(err)
          {
           console.log(err);
          }
            
    }); 
    res.send("done"); 
}



const getTokenData=async(req,res)=>{
    let wallet_address=req.query.wallet.trim();
    const nftcontract= new web3.eth.Contract(abi , address);
    console.log(nftcontract);
    try{
        const balance = await nftcontract.methods.tokenURI(wallet_address).call({
            from :"0xd5aD3244F8a85D6916B8472Ff7C5b3201d2164ed",
            gas:500000
          });
          console.log('balance  is',balance);
    
          res.send(balance);

    }catch(err){
       console.log(err)
    }
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
        let nftBalance=await walletServices.getNftBalance(wallet_address);
          await walletServices.updateBalance(wallet_address,nftBalance);
        res.send(user);

     }else
      {  let email=wallet_address+"@gmail.com";
          let userOBJ={name:wallet_address,
                       email:email,
                       password:"123456",
                       user_role:'user'
                       };
          let user=await userServices.saveUser(userOBJ);
          let nftBalance=await walletServices.getNftBalance(wallet_address);
          let walletOBJ={user_id:user._id,
                         wallet_address:wallet_address,
                         nft_balance:nftBalance}
          let wallet=await  walletServices.saveData(walletOBJ);
          res.send(user);
      }
           
}

const buyTeam=async(req,res)=>{
    let address=req.query.address;
    let team=await teamServices(address);
    res.send(team);
}


const playersNft=async(req,res)=>{
      let users=await userServices.users();

      users.forEach(async(user) => {
           
        nftToken=await walletServices.getNFTToken(user.wallet_address);

          if(nftToken.length>0){
            for(i=0;i<nftToken.length;i++)
            {
              let tokenData=await walletServices.getNFTTokenData(nftToken[i]);

              await walletServices.saveNFT(user._id,user.wallet_address,nftToken[i],tokenData);
            }
          } else
            {
                res.send("No NFT Found")
            } 
      });
}

const LazyMint=async(req,res)=>{


     res.render('minter',{title:"minter"});

}
module.exports={
    index,
    createUser,
    login,
    getAvailableBalance,
    getTokenData,
    playersNft,
    getCryptoPunk,
    LazyMint
}
