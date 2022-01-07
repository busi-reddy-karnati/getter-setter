const { web3, myAccount } = require('./utils')
const { bytecode } = require('./contractArtifacts')

//async and await are used to wait for promises. https://www.w3schools.com/js/js_async.asp

//This is one type of transaction where we have created a new address
async function deploy(){

    // This is a Data for being sent into the blockchain
    await web3.eth.sendTransaction({
        from: myAccount.address,

        //gas is unit for payment inside the network
        gas: 800000,
        
        //Data is the byte code for the smartcontact
        data: bytecode
    })
    .on('receipt', console.log)
    // Hash is the hash value of the transaction. Hash is there when the trasaction is created.
    //reciept is when the transaction is included in the block

}

deploy()