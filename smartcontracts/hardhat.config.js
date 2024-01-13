require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    Mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};