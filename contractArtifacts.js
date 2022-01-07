module.exports = {
    // 0x is added for the compiler to understand that this is hex

    // This bytecode is not shown on the terminal, it is shown in a bin file

    // Bytecode is what we deploy using web3 which is interface for javascript to interact with the blockchain
    // Once we have bytecode, we don't really need
    bytecode:`0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100c3565b610075565b005b61005f61007f565b60405161006c91906100ff565b60405180910390f35b8060008190555050565b60008054905090565b600080fd5b6000819050919050565b6100a08161008d565b81146100ab57600080fd5b50565b6000813590506100bd81610097565b92915050565b6000602082840312156100d9576100d8610088565b5b60006100e7848285016100ae565b91505092915050565b6100f98161008d565b82525050565b600060208201905061011460008301846100f0565b9291505056fea26469706673582212200165c61ee6207bdbc37da2cdadef48af7896c6523334d60a9c98669306a821f664736f6c634300080b0033`,
    
    // Application Binary Interface. This is a summary of the smart contract
    //Most important part of the Smart Contract
    abi:`[{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"y","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"}]`,

    //Address is the contract address
    address: `0x99940c1bae8aFf337ee1B5F6f91957C190cc78Ea`

}