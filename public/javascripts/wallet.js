
async function metamaskPopup(){
    finalprice = "0.0001";
    user_accounts = await getAccount();
    ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
            from: user_accounts,
            to: '0x6cDDe6477FCBC301a11ECD8Dc41307A5470DF7F1',
            value: '0x' + ((finalprice * 1000000000000000000).toString(16)), //'0x09184e72a000',
            chainId: '0x1' //gasPrice: '0x09184e72a000',
            //gas: '21000',
        }, ],
    })

    .then((txHash) => {
        console.log(txHash);
        // var obj = document.getElementById('tx_id1');
        // // obj.value = txHash;
        // $.ajax({
        //     dataType: "json",
        //     type: 'GET',
        //     url: '/store-hash',
        //     data: {
        //         tx_id: txHash,
        //         art_id: art_id,
        //         address: user_accounts,
        //         qty: document.getElementById("copies").value,
        //         amount: finalprice,
        //         currency: currency,
        //         currencyRate: currencyRate
        //     },
        //     success: function(data) {
        //         swal({
        //             type: 'success',
        //             text: 'Transaction completed successfully.',
        //             timer: 3000,
        //             onOpen: function() {
        //                 swal.showLoading()
        //             }
        //         }).then(function() {
        //             location.reload();
        //         });
        //         //               location.reload();
        //     }
        // });
    });
}

async function getAccount() 
 {
    accountsLocal = await ethereum.request({
                        method: 'eth_requestAccounts'
                      });
   accounts = accountsLocal[0];
   return accounts;
}