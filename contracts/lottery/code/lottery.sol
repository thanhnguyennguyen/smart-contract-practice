pragma solidity ^0.4.17;

contract Lottery {
    address public manager;

    constructor () public {
        manager = msg.sender;
    }
}
