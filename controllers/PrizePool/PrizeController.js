const prizePoolServices=require('../../services/prizePoolServices')





const createPool=async(req,res)=>{
    const data=[{name:"D1",percentage:15},
    {name:"D2",percentage:9.343},
    {name:"D3",percentage:7.047},
    {name:"D4",percentage:5.782},
    {name:"D5",percentage:4.96},
    {name:"D6",percentage:4.37},
    {name:"D7",percentage:3.936},
    {name:"D8",percentage:3.591},
    {name:"D9",percentage:3.311},
    {name:"D10",percentage:3.08},
    {name:"D11",percentage:2.885},
    {name:"D12",percentage:2.717},
    {name:"D13",percentage:2.572},
    {name:"D14",percentage:2.444},
    {name:"D15",percentage:2.331},
    {name:"D16",percentage:2.23},
    {name:"D17",percentage:2.139},
    {name:"D18",percentage:2.056},
    {name:"D19",percentage:1.981},
    {name:"D20",percentage:1.913},
    {name:"D21",percentage:1.85},
    {name:"D22",percentage:1.791},
    {name:"D23",percentage:1.737},
    {name:"D24",percentage:1.687},
    {name:"D25",percentage:1.641},
    {name:"D26",percentage:1.597},
    {name:"D27",percentage:1.556},
    {name:"D28",percentage:1.518},
    {name:"D29",percentage:1.482},
    {name:"D30",percentage:1.447},
     ];
    let countPool=await prizePoolServices.checkPool();
     if(countPool>0){
         res.send("Prize Pool Already Created");
     }else{
        let pool=await prizePoolServices.savePrizePool(data);
        res.send(pool);
     }
}

module.exports={createPool}