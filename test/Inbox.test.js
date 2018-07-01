const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());
class Car {
  park() {
    return 'Stopped';
  }
  drive() {
    return 'gogo';
  }
}

let car;

beforeEach(() => {
  console.log(' before each test:');
  car = new Car();
});

describe('Nguyen test Car class', () => {
  it('can park', () => {
    assert.equal(car.park(), 'Stopped');
  } );

  it('can drivde', () => {
    assert.equal(car.drive(), 'gogo');
  } );
} )
