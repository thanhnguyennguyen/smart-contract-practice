const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile');
const INITIAL_MESSAGE = 'Hello Solidity';
let accounts;
let inbox;
beforeEach(async() => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // use one of those accounts to deploy the contracts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode, arguments: [INITIAL_MESSAGE]})
  .send({from: accounts[0], gas: '1000000'})

  inbox.setProvider(provider);
});

describe('Get Accounts', () => {
  it('is deployment success', () => {
    // console.log(accounts);
    // console.log(inbox);

    // make sure inbox.options.address is not undefined
    assert.ok(inbox.options.address);
  });

  it('test default message', async() => {
    const MESSAGE = await inbox.methods.message().call();
    assert.equal(MESSAGE, INITIAL_MESSAGE);
  });


    it('test setMessage', async() => {
      const NEW_MESSAGE = 'Nguyen is in blockchain technology';
      await inbox.methods.setMessage(NEW_MESSAGE)
      .send({from: accounts[0], gas: '1000000'});
      const MESSAGE = await inbox.methods.message().call();
      assert.equal(MESSAGE, NEW_MESSAGE);
    });
});
