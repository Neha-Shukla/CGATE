const { ethers } = require("hardhat");

async function main() {
  // Replace "ContractName" with the actual contract name you want to verify
  const contractName = "CGateV2";

  console.log(`Verifying ${contractName} contract...`);

  const contract = await ethers.getContractFactory(contractName);
  const deployedContract = await contract.deploy();

  await deployedContract.deployed();
  
  // Verify the contract on Etherscan
  await hre.run("verify:verify", {
    address: deployedContract.address,
    constructorArguments: [], // Add constructor arguments if needed
  });

  console.log(`Contract ${contractName} verified on Etherscan`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
