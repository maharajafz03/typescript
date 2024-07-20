 import { ethers } from 'ethers';

 function main() {
  //const provider = 'https://sepolia.infura.io/v3/321dad07577441b990ad84380687b0a8'

  //const name = await new ethers.JsonRpcProvider(provider);

  const wallet =  ethers.Wallet.createRandom();

  const address = wallet.address;

  const privatekey = wallet.privateKey;

  console.log(`pub key --> ${address}  privatekey ---> ${privatekey}`)
}

main()

// // Replace with your preferred Ethereum provider URL
// const providerUrl = 'https://mainnet.infura.io/v3/321dad07577441b990ad84380687b0a8'; // Or use a different provider URL
// const provider = new ethers.JsonRpcProvider(providerUrl);

// async function resolveENSName(ensName) {
//   // Check if the ENS name is provided
//   if (!ensName) {
//     console.error('Please provide an ENS name.');
//     return;
//   }

//   try {
//     // Resolve the ENS name to an Ethereum address
//     const address = await provider.resolveName(ensName);

//     if (address) {
//       // Log the resolved address
//       console.log(`Ethereum Address for ${ensName}: ${address}`);
//     } else {
//       console.log(`ENS name ${ensName} not found.`);
//     }
//   } catch (error) {
//     console.error('Error resolving ENS name:', error);
//   }
// }

// // Example usage
// resolveENSName('hello.eth');
