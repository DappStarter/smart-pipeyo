require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strike cruise screen quality hundred light army genre'; 
let testAccounts = [
"0xb0411b96fccf9c9e1626566edcc58db1ab1207b5acc4a667057232ab68ee6283",
"0x313fd71717778a61f4dafaa129e7315a576453dd17c2593e87407fd57e0c7223",
"0xbfe7624fa16d4a63dc9643bc8232569b8d7aac01fad9133dfc99cef7547435a2",
"0x899f1fe44e5eb6f19ca74db07d8f7885fae1f5b7497e77ec571e4ff8046381b3",
"0xd244d2d528cc13963dc43cf09ef92ece9be64ffef8f5478eb482f39713fdeb4c",
"0x0128075d78b504d882175a82d3ed3b57420804569d39c015ec0a99e14f91c584",
"0x6643ab37a5e881f0fc15efb5fdd7033b6ac95f22ca29d3b0fb81b084b74b5e5a",
"0x425ad00ab72d782218dae313905b93e3a37267839a029ef1ed6d08492a7438be",
"0x90cf00984e2eabcd17cd9a9be32635bfa8537a0813b08188c941027bab3622c8",
"0x69d20be760ebf405def3faf5e9e7f926bc5eea2c2c6fc3a38eb1cd8b62d18c5f"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
