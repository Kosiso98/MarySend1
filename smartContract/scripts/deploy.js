async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MarySend = await ethers.getContractFactory("MarySender");
  const marySend = await MarySend.deploy();

  console.log("MarySend address:", marySend.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });