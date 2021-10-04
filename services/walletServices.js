const {WalletInfo}=require('../models/Wallet');
const {WalletNFT}=require('../models/WalletNFT');
var randomToken = require('random-token');
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const Web3 = require('web3');
const web3 = new Web3(
    new Web3.providers.HttpProvider(
       "https://bsc-dataseed1.binance.org/81D25JCZ54XF4E6INGDTGKR7NPFG6YYWFH"
      )
);

const contractAddress = "0xd5aD3244F8a85D6916B8472Ff7C5b3201d2164ed";
const abi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CANNOT_TRANSFER_TO_ZERO_ADDRESS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NOT_CURRENT_OWNER","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_approved","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"no_of_tokens_to_create","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"tokensOwned","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const nftContract = new web3.eth.Contract(abi, contractAddress);


const saveData=async(walletOBJ)=>{
    try{

      let wallet= new WalletInfo(walletOBJ);
       await wallet.save();
    }catch(err){
        console.log(err);
    }
}

const saveNFT=async(user_id,address,token,tokenURL)=>{
      try{
          let NftOBJ={user_id:user_id,
                      wallet_address:address,
                      nft_token:token,
                      tokenURL:tokenURL};
          let NFT= new WalletNFT(NftOBJ);
          await NFT.save();
          return NFT;
          }catch(e){
             console.log(e);
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
    
    const nftcontract= new web3.eth.Contract(abi,contractAddress);
    //console.log(nftcontract);
    try{
        const balance = await nftcontract.methods.tokensOwned(wallet_address).call({
            from :"0xd5aD3244F8a85D6916B8472Ff7C5b3201d2164ed",
            gas:500000
          });
          console.log('balance  is',balance);
    
          return balance ;

    }catch(err){
       console.log(err)
    }
}

const getNFTTokenData=async(token)=>{
    
    const nftcontract= new web3.eth.Contract(abi ,contractAddress);
    //console.log(nftcontract);
    try{
        const balance = await nftcontract.methods.tokenURI(token).call({
            from :"0xd5aD3244F8a85D6916B8472Ff7C5b3201d2164ed",
            gas:500000
          });
          console.log('balance  is',balance);
    
          return balance;

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
    updateBalance,
    saveNFT,
    getNFTToken,
    getNFTTokenData
}