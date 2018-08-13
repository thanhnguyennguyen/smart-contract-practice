

# [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/thanhnguyennguyen/smart-contract-practice/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/thanhnguyennguyen/smart-contract-practice/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/thanhnguyennguyen/smart-contract-practice/badges/build.png?b=master)](https://scrutinizer-ci.com/g/thanhnguyennguyen/smart-contract-practice/build-status/master)[![Code Intelligence Status](https://scrutinizer-ci.com/g/thanhnguyennguyen/smart-contract-practice/badges/code-intelligence.svg?b=master)](https://scrutinizer-ci.com/code-intelligence)   [![codecov](https://codecov.io/gh/thanhnguyennguyen/smart-contract-practice/branch/master/graph/badge.svg)](https://codecov.io/gh/thanhnguyennguyen/smart-contract-practice) [![Travis_Build_Status](https://travis-ci.com/thanhnguyennguyen/smart-contract-practice.svg?branch=master)](https://travis-ci.com/thanhnguyennguyen/smart-contract-practice)

# [![Deploy to Docker Cloud](https://files.cloud.docker.com/images/deploy-to-dockercloud.svg)](https://cloud.docker.com/stack/deploy/?repo=https://github.com/thanhnguyennguyen/smart-contract-practice/)
# Smart Contract practices
# Copyright © 2018 Nguyen Nguyen
# Please never write code without tests
## Lottery game
### Designs can be found here
https://github.com/thanhnguyennguyen/smart-contract-practice/tree/master/contracts/lottery/design
### Contract  url
https://rinkeby.etherscan.io/address/0xa0a5566cb16c16384f3b7b3a3a67cbbe0bf2f137

# Solidity basic knowledge
## Solidity data type
### ![Solidity data type 1](https://i.imgur.com/2P3XeQR.png)
### ![Solidity data type 2](https://i.imgur.com/majsyDN.png)
### ![Solidity data type 3](https://i.imgur.com/Yy9WIXI.png)
### ![Solidity data type 4](https://i.imgur.com/eL8TkKa.png)

## Memory and storage ![data-location](https://i.imgur.com/7H21p1E.jpg)
## Array in Solidity
### avoid nested array ![Solidity note 1](https://i.imgur.com/OkIIVRb.png)
### static and dynamic array ![dynamic-static](https://i.imgur.com/VohKPct.jpg)
### Not allowed ![not-allowed](https://i.imgur.com/UKJ8uOM.jpg)
### bytes and string are special arrays
bytes32 data; (~ byte[32] data )
bytes data (~ byte[] data )
String vss bytes ![string-vs-bytes](https://i.imgur.com/wr8vKTM.jpg)
## Functions
![function](https://i.imgur.com/1536CLf.jpg)
### Function visibilities and modifier ![func-visibilities](https://i.imgur.com/alCH2ma.jpg)
### Return multiple values ![func-return-multiple-values](https://i.imgur.com/OxoTTjh.jpg)
### To assign results from multiple returns function to variable, we use tupple ![tupple](https://i.imgur.com/undefined.jpg)
### Function overloading ![func-overloading](func-overloading)
Constructor overloading is not supported

## Variable initialization
Variables initialized to defaults at the beginning of functions
![variable-initialization](https://i.imgur.com/psByqb9.jpg)

## Mapping
### Difference between mapping and hashtable (of java) or object (of javascript) ![](https://i.imgur.com/1I1oYbCg.jpg)
### Mapping is defined as state , storage only, not allowed in function

## Enum and struct are not a part of ABI definition, not available for external function call

## Global variable: 
![global-var](https://i.imgur.com/svqPNGK.jpg)
### ![Solidity global variable 1](https://i.imgur.com/XWEcnzk.png)
### Difference between msg.sender and tx.origin ![msg-sender-vs-tx-origin](https://i.imgur.com/KfxiPbe.jpg)

## Error handling in Solidity
### No try-catch in  Solidity
### What happen if an exception is thrown
![exception](https://i.imgur.com/nGaxVnb.jpg)
### Check and handle exception ![handle-exception](https://i.imgur.com/qTfnym5g.jpg)
![](https://i.imgur.com/i1c8NBy.jpg)

## OOP Support
No keyword *abstract contract*, function declared but no body provided. That class can not be deployed
### Inheritance: multiple inheritance is supported
### Polimorphism 
### Overloading (except constructor)

## Interface and abstract contract
![difference-interface-abstrct-contract](https://i.imgur.com/ADqHHyr.jpg)
to implement an interface, use keywork *is*, similar for extending abstract contract

## Events and Logs
### Events are part of ABI definition
### Only indexed event arguments  can be used in Filter, maximum 3 indices are allowed
![event](https://i.imgur.com/rFD6sC8.jpg)


## Contract design patterns
### Contract destruction ![contract-destruction](https://i.imgur.com/DT2hfD0.jpg)
#### Sending tracsaction to dead contract: fail
#### ALl fund send to dead contract will be lost
### Factory contract
### Name registry pattern
Using a registry Contract to manage all contracts, then using contract name to access instance of a particular contract
### Mapping iterator pattern
#### Use another array to keep keys ![mapping-itorator-pattern](https://i.imgur.com/FZPwB1Tg.jpg)
#### Storage cost goes up
#### Cost of iteration goes up
### Withdrawal pattern
#### Send vs transfer ![send-vs-transfer](https://i.imgur.com/wzaCgxO.jpg)
#### Withdrawal pattern ![withdrawal-pattern](https://i.imgur.com/0lYuucS.jpg)
![](https://i.imgur.com/m5wyFD1.jpg)

# ERC-20 specification: 6 functions, 2 events
## ![ERC-20](https://i.imgur.com/jkLhW5G.jpg)
## ![ERC-20-2](https://i.imgur.com/IKnmPjT.jpg)
## ![ERC-20-3](https://i.imgur.com/ZPgaJcO.jpg)
## ![ERC-20-4](https://i.imgur.com/nJ34JFzg.jpg)

https://github.com/thanhnguyennguyen/ERC20-token

# web3 knowledge
## Send and Call
### ![Send-vs-call](https://i.imgur.com/m3ji3et.jpg)
## Filter object: web3.eth.filter
### ![filter](https://i.imgur.com/sFdgMLV.jpg)
### Event vs filter ![event-vs-filter](https://i.imgur.com/sb1RVbI.jpg)


