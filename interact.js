
const { web3, myAccount } = require('./utils')
const { abi, address } = require('./contractArtifacts')


//This way we tell the contract where our smart contract is present and the abi to be used
//We gave abi in a string format. We want JS to know that it is a JSON
let contract = new web3.eth.Contract(JSON.parse(abi), address)

// console.log(contract)
//using node interact.js


async function get(){

    //Usually, async functions return a promise that I promise, I will send the value later. But with await, we wait until that time and assign
    let r = await contract.methods.get().call()
    //Since get is a read, we do not need to provide gas

    // console.log(r)
    return r
}

//For test
// get()


async function set(value){

    //Since this is a set method, we need to give gas coz it changes the state
    let r = await contract.methods.set(value).send({
        from:myAccount.address,
        gas:80000
    })
    // console.log(r)
    return r.transactionHash
}


//set(4)
//THis gives a to address as the contract address since this is to contract
// get()


//But the code below is not understood by Browser, so install browserify. 
//Till not this file uses node. Now it should use browserify
// browserify interact.js > bundle.js
//We are calling the browserified file as bundle.js

// for interacting with the browser
window.addEventListener('load', () => {
  document.getElementById("get").onclick = () => {
    get().then((r) => {
      document.getElementById("resultOfGet").innerHTML = r
    })
  }
  document.getElementById("set").onclick = () => {
    val = document.getElementById("value").value
    set(val).then((r) => {
      document.getElementById("resultOfSet").innerHTML = r
    })
  }
})