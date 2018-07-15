pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    constructor () public {
      manager = msg.sender;
    }

    function enter() public payable {
      require(msg.value > .01 ether);
      players.push(msg.sender);
    }

    function pickWinner() public view returns(address) {
      uint index = this.random() % players.length;
      return players[index];
    }

    function random() private view returns(uint) {
      return uint(keccak256(block.difficulty, now, players));
    }
}
