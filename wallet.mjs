// import { ethers } from "ethers"

// const providerUrl = 'https://mainnet.infura.io/v3/321dad07577441b990ad84380687b0a8'
// const provider = new ethers.JsonRpcProvider(providerUrl);

//  function main(ENS) {

//     if(!ENS) {
//         console.log("please enter ethereum name");
    
//     } else() => {
        
//         async function king(ENS) {
//         const name = await ethers.provider.resolvename(ENS);
          
//             if(name.Address == Address[0]) {
//                 console.log("name not found")
//             }
//         const Address = name.Address;
//         console.log(Address);
//         }
//     }
    
// king(ENS) 
// }

// main("raja.eth")


import { ethers } from "ethers";

// Set up the provider with the Infura URL
const providerUrl = 'https://mainnet.infura.io/v3/321dad07577441b990ad84380687b0a8';
const provider = new ethers.JsonRpcProvider(providerUrl);

async function resolveENS(ENS) {
  try {
    // Resolve the ENS name to an Ethereum address
    const address = await provider.resolveName(ENS);

    if (address) {
      console.log(`Address for ${ENS}: ${address}`);
    } else {
      console.log(`ENS name ${ENS} not found.`);
    }
  } catch (error) {
    console.error('Error resolving ENS name:', error);
  }
}

function main(ENS) {
  if (!ENS) {
    console.log("Please enter an Ethereum name.");
  } else {
    resolveENS(ENS);
  }
}

// Call the main function with the ENS name
main("raja.eth");
