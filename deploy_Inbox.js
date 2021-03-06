const path = require('path');
const fs = require('fs');

const mnemonicFile = path.resolve(__dirname, 'config', 'mnemonic.txt');
const mnemonic = fs.readFileSync(mnemonicFile, 'utf8');

const infuraFile = path.resolve(__dirname, 'config', 'infura.txt');
const infuraUrl = fs.readFileSync(infuraFile, 'utf8');

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  mnemonic,
  infuraUrl
 );

const web3 = new Web3(provider);
const message = 'NguyenNguyen is deploying the first smart contract';
// cannot use await outside a function
//
const deploy = async() => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data: bytecode, arguments: [message]})
      .send({gas: '1000000', from: accounts[0]});
      console.log('Contract deployed to ', result.options.address);
  } catch (err) {
    console.log(err);
  }

};

deploy();
