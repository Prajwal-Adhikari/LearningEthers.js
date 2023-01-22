const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/ba3c1efdb72b4ecb963781161c0cd7c4`);

const contractAddress = "0x40dea11e073587EC9196a5D56724338f2a5bc9A7";
const contractABI = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractInteraction = async() =>{
    const walletContract = new ethers.Contract(contractAddress,contractABI,provider);
    const contractName = await walletContract.name();
    console.log(`Contract Name : ${contractName}`);

    const num = await walletContract.getValue();
    console.log(`num = ${num}`);

    const contractBalance = await walletContract.contractBalance();
    console.log(`contractBalance = ${contractBalance}`);

    const userBalance = await walletContract.accountBalance("0x2DE07f52c37018d9678d952103d0fEbFdaF5642d");
    console.log(`user balance in wei = ${userBalance}`);

    const userBalanceInEth = ethers.utils.formatEther(userBalance);
    console.log(`user balance in ethers = ${userBalanceInEth}`);


}

contractInteraction();
