const { ethers } = require("hardhat");

async function main() {
    const SkillPayment = await ethers.getContractFactory("SkillPayment");
    const skillPayment = await SkillPayment.deploy();

    await skillPayment.deployed();

    console.log("SkillPayment deployed to:", skillPayment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

