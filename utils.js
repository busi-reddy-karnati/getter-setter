// Web3 helps us with javascript to interact with the blockchain. For Different Languages, different libraries exist
const Web3 = require('Web3')


//Mentions where the web3 is running
const web3 = new Web3('http://localhost:8545')

// Use node utils for this printing
// console.log(web3)
const privateKey = '0x69c830f53cbacdbcf098d18082f5d373bc4a8c3c4da7118a8e6e6ef6318ede94';

// We use myaccount object to interact with the blockchain
const myAccount = web3.eth.accounts.wallet.add(privateKey);

// For us to use in other scripts, ex: deploy.js
module.exports = {
    web3:web3,
    myAccount:myAccount
}