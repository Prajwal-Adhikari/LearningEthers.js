const {ethers} = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/ba3c1efdb72b4ecb963781161c0cd7c4`);

const queryBlockChain = async () =>{
    // const currentBlockNumber = await provider.getBlockNumber();
    // console.log(`Current block number is : ${currentBlockNumber}`);

    const balance = await provider.getBalance("0xDBf8Db969dC6D05e4f5c906394025651bAed96f4");
    console.log(ethers.utils.formatEther(balance));
}
queryBlockChain();