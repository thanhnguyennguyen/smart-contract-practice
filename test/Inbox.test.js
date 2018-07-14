const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');
let accounts;
let inbox;
beforeEach(async() => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // use one of those accounts to deploy the contracts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode, arguments: ['Hello Solidity']})
  .send({from: accounts[0], gas: '1000000'})

});

describe('Get Accounts', () => {
  it('deploy a contract', () => {
    // console.log(accounts);
    console.log(inbox);
  })
});
