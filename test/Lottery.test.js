const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const {interface, bytecode} = require('../compile');

let lottery;
let accounts;

beforeEach(async() => {
  accounts = await new web3.eth.getAccounts();
  lottery = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode})
  .send({from: accounts[0], gas: '1000000'});
});

describe('Test Lottery contract', ()  =>  {
  it('deploy lottery contract', ()  =>  {
    assert.ok(lottery.options.address);
  });

  it('allow one account to enter', async()  =>  {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('.02', 'ether')
    });
    const players = await lottery.methods.getPlayers().call();
    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it('allow multiple accounts to enter', async()  =>  {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('1', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei('2', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei('3', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[3],
      value: web3.utils.toWei('4', 'ether')
    });
    const players = await lottery.methods.getPlayers().call();
    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(accounts[3], players[3]);
    assert.equal(4, players.length);

    // total 10 ethers
    assert.equal(10, await lottery.methods.getCurrentBalance().call());
  });

  it('require minimum amount to enter', async()  =>  {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 1000 // wei
      });
      assert(false);
    } catch(error) {
      assert(error)
    }

  });
});
