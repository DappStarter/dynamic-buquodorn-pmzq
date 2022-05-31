require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note mean purchase install kite bridge topic'; 
let testAccounts = [
"0xad19fc4a60393889d30039dacff9afb8e62cbb679813da8d9a7cc7bf0875bdba",
"0x34ede8436dcb847d463931c06d883d1ca6b3bf169f67c754cc1a5031500be6e3",
"0xd787acb8bbd54e5c5bc65916a9f2b165cba1b672eceff302025b22af2d363105",
"0x693e5356b07e487bcbafdfab9d77cdda68a5996d99071ebe35b677b6894f37c3",
"0xedfd8f8d7baa0a31f7ade023e7e9aba23e6c9ea1427216212eea80340573b2b8",
"0x85ccf55deb712a54383b4d57fc13420d7f705fe1ec30dd3200b6ede33df0ff81",
"0x0cfdfc3cb24c27107c160171402c091ae9dc1e9c4718db9f81cb07d551698348",
"0xc78f0c6800b9ded67b87c71e0ce5be09211598ef31fecdce544ee4f4d5d1f319",
"0xfe0ff3e8e36140a5d542f1eaef0e09317af4649c50276b4f9ac1c1b3ab23e2aa",
"0x58305e3efbda15c7973eb817a0f26208b260793f6160d81af36f133509248069"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


