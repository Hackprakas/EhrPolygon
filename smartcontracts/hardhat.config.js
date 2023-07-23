require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    MylocalGanache: {
      url: 'HTTP://127.0.0.1:7545',
      accounts: ['a3b2c3f670870d3c500354068a61760268e095fe41abeffa799bdfad5ec6c28c']
    }
  }
};