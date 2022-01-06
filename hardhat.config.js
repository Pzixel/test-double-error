require('@nomiclabs/hardhat-truffle5');
require('dotenv').config();

if (process.env.MAINNET_RPC_URL == null) {
    throw new Error('Please specify MAINNET_RPC_URL in .env file');
}


module.exports = {
    solidity: {
        version: '0.8.10',
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000000,
            },
        },
    },
    networks: {
        hardhat: {
            forking: {
                url: process.env.MAINNET_RPC_URL,
            },
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    gasReporter: {
        enable: true,
        currency: 'USD',
    },
    mocha: {
        timeout: 90000,
    },
};
