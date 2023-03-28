require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "process.env.IFURA_URL",
      accounts: ['process.env.PRIVATE_KEY']
    }
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}