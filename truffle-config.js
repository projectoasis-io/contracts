var HDWalletProvider = require("truffle-hdwallet-provider");
var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker");
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
     gas: 6721975,
     gasPrice: 22000000000,
   },
   bnbtestnet: {
    provider: function() {
      var wallet = new HDWalletProvider('1ef232a59c3c703ebb1aacb5d5e72c0c15b364aeb6039dac125fada2d3fa694a', 'https://data-seed-prebsc-1-s2.binance.org:8545/')
      var nonceTracker = new NonceTrackerSubprovider()
      wallet.engine._providers.unshift(nonceTracker)
      nonceTracker.setEngine(wallet.engine)
      return wallet;
    },
    networkCheckTimeout: 10000, 
    network_id: 97,
    gas: 8000000,
    gasPrice: 22000000000,
    skipDryRun: true,
    from:"0xdF490FA4b71C2B651Df95827bAAB750dac665dD6"
  },


  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  compilers: {
    solc: {
      version: "0.6.12",

      
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: 'CWN7NM14ZE4E3DZM6Q7ANN7M8XYHBZJP23'
  }
};
