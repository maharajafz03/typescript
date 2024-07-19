// import { ethers } from 'ethers';

// // Replace with your contract address
// const contractAddress = '0xED5AF388653567Af2F388E6224dC7C4b3241C544';

// // Replace with your ABI
// const contractABI = [
//   {"constant":false,"inputs":[{"name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
//   {"constant":false,"inputs":[{"name":"newImplementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},
//   {"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
//   {"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
//   {"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
//   {"inputs":[{"name":"_implementation","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},
//   {"payable":true,"stateMutability":"payable","type":"fallback"},
//   {"anonymous":false,"inputs":[{"indexed":false,"name":"previousAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},
//   {"anonymous":false,"inputs":[{"indexed":false,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event"}
// ];

// async function listContractFunctions() {
//   // Connect to the Ethereum network (Mainnet, Rinkeby, etc.)
//   const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/321dad07577441b990ad84380687b0a8');
  
//   // Create a contract instance
//   const contract = new ethers.Contract(contractAddress, contractABI, provider);
  
//   // Retrieve the contract functions
// //   const functions = contract.interface.functions;
  
//   console.log('Available Contract Functions:');
//   for (const funcName in functions) {
//     if (functions.hasOwnProperty(funcName)) {
//       console.log(funcName);
//     }
//   }
// }

// listContractFunctions();
