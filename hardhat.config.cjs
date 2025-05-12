require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    fantomtest: {
      url: `https://lb.drpc.org/ogrpc?network=sepolia&dkey=AurhOhDDO0Lmm5EqA2yCTldDjfIOsYUR75r0DonbV6cR`,
      accounts: [
        `75df64bab9d9853455b6a86162b6e139593bd16a71d12abacc8cc8efa434a017`,
      ],
    },
  },
};