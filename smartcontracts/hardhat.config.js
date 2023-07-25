require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    Mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ['c4acd5fa1ad13df8ee866c290c81733c4521ec0206b4b5de1ec828b3f801c605']
    }
  }
};