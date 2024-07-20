import { ethers } from "ethers";

async function get() {
    try {
        // Create a new provider instance with the given URL
        const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/321dad07577441b990ad84380687b0a8");

        // Get the current block number
        const blockNumber = await provider.getBlockNumber();

        // Log the block number
        console.log(`Current block number: ${blockNumber}`);
    } catch (error) {
        console.error("Error fetching block number:", error);
    }
}

get();



console.log("hello world")