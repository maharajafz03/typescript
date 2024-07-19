 import { constants } from 'buffer';
import { ethers } from 'ethers';

// // Replace with your contract address
// const contractAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

// // Replace with the ABI of your contract
// const contractABI = [
//   // Include the ABI fragment for the functions you need
//   "function name() view returns (string)",
//   "function totalSupply() view returns (uint256)"
// ];

 async function getContractDetails() {
//   // Connect to the Ethereum network (Mainnet, Rinkeby, etc.)
   const provider = await new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/321dad07577441b990ad84380687b0a8');
   
//   // Create a contract instance
//   const contract = new ethers.Contract(contractAddress, contractABI, provider);
  
//   try {
//     // Call the contract's `name` function
//     const name: string = await contract.name();
    
//     // Call the contract's `totalSupply` function
//     const totalSupply: ethers.BigNumber = await contract.totalSupply();
    
//     // Convert totalSupply to a readable format
//     const totalSupplyFormatted = ethers.utils.formatUnits(totalSupply, 18); // Adjust decimals if needed
    
//     console.log('Contract Address:', contractAddress);
//     console.log('Contract Name:', name);
//     console.log('Total Supply:', totalSupplyFormatted);
//   } catch (error) {
//     console.error('Error fetching contract details:', error);
//   }
// }
// test net add == 0x9aC3201F4B9eCBD9e5Fe322d7B6c100Fa17ae6CE
// eth address == 0x1Dc03d8f6C1A8E9dc169a4547b7e86A831ca02c8
// getContractDetails();

const blocknumber =  await provider.getBlockNumber();
const balance =  await provider.getBalance("0x9aC3201F4B9eCBD9e5Fe322d7B6c100Fa17ae6CE");
const balanceInEther = ethers.formatEther(balance);

console.log(`balance in wei --> ${balance}`);

console.log(`balance in eth ${balanceInEther}`)
console.log(`this is a blocknumber ${blocknumber}`);

}
getContractDetails();