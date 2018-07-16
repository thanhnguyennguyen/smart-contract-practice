const path = require('path');
const fs = require('fs');
const solc = require('solc');

//const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
//const source = fs.readFileSync(inboxPath, 'utf8');
const lotteryPath = path.resolve(__dirname, 'contracts/lottery/code', 'lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

//module.exports = solc.compile(source, 1).contracts[':Inbox  '];
module.exports = solc.compile(source, 1).contracts[':Lottery'];
