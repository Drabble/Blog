I found an interest in the Blockchain after some friends started investing time and money in it. I had heard about it many times over the years and decided to make some research to properly understand it. I'll try to give a quick explanation below.

**Public/Private key**

In the blockchain every user has a pair of public key and a private key. The public key has its names implies can be shared, it identifies the user in the blockchain and is public. On the other hand, the private key should never be shared with anyone.

You can encrypt data with the private key and only the public key is able decrypt it. It works the other way around. On the blockchain, you can't encrypt data with the public key and decrypt it with the private key. This is called asymmetric encryption.

We can use that to our advantage to sign blocks. Here is an example. You want to sign a message, you will take the entire message and you will encrypt this with your private key. Then you can send the message along with the encrypted version of the message as well as your public key to anyone. This person will be able to decrypt the encrypted message with your public and assess that the message contained inside the encrypted version is the same as the unencrypted message. This way he can be sure that only a person who has access to the private key has been able to encrypt this message as long as his private key is still private.

This asymetric encryption technique can be used to sign blocks. We will discuss blocks below.

![assets/posts/2020-08-11-erc20/asym_enc.webp](assets/posts/2020-08-11-erc20/asym_enc.webp "Asymmetric encryption")

*Asymmetric signing with private/public key*

**Blocks**

The blockchain is in its most basic form an array of blocks. Each block contains a certain amount of transactions. Once a block is filled with transactions, it will be validated, signed with a private key and added to the blockchain. There is a little more to that and we will discuss it in the proof of work/proof of stake sections.

The block actually contains a bit more data than just the list of transactions. You don't need to understand everything here but we will discuss in the following sections.

- Version: A numerical value indicating the version of the block format.
- Previous Block Hash: A 32-byte hash of the header of the previous block.
- Merkle Root: A 32-byte hash representing the root of the Merkle tree.
- Timestamp: A timestamp recording when the block was mined.
- Difficulty Target: A value adjusting the mining difficulty.
- Nonce: A 32-bit number adjusted during mining.
- Transaction Counter: An integer representing the total number of transactions in the block.
- List of Transactions: Each block contains a list of transactions representing the movement of bitcoins.
- Transaction Structure:
  - Inputs: Reference previous transactions with a script (scriptSig).
  - Outputs: Specify recipient's address and amount with a script (scriptPubKey).
- Coinbase Transaction: The first transaction, created by the miner. Includes block reward and transaction fees.

**Peer to peer**

The blockchain works in a peer to peer network. Let's understand what that means.

Just like with torrents, anyone can take part in the peer to peer network. You just need a software that will connect to the network and exchange message with other peers. It will get a list of initial peers online and then communicate with them to find other peers. It will create a web of connected peers.

In the Bitcoin peer-to-peer network, nodes communicate with each other using a set of network commands. These commands are part of the Bitcoin protocol and allow nodes to exchange information about transactions, blocks, and the overall state of the network. Again, you don't need to understand all of these commands to understand how the blockchain works, but I will list them here:

- Version (version): This command is used to initiate a connection between two nodes. It includes information about the sender's software version, node services, timestamp, and other details.
- Verack (verack): After a connection is established, nodes send a verack message to acknowledge the successful version handshake.
- Address (addr): Nodes use the addr command to share information about their known network addresses. This helps in maintaining a list of active nodes in the network.
- GetAddr (getaddr): A node can request information about the addresses of other nodes using the getaddr command.
- Inv (inv): The inv command is used to notify other nodes about new transactions or blocks. It contains a list of inventory items (invectors) representing transactions or block hashes.
- GetData (getdata): Nodes can request specific transactions or blocks from their peers using the getdata command. The requested data is specified using invectors.
- Tx (tx): The tx command is used to broadcast a transaction to the network. It includes the details of the transaction.
- Block (block): Nodes use the block command to broadcast newly mined blocks to the network. It includes the block header and the list of transactions in the block.
- Headers (headers): Nodes can request block headers from their peers using the headers command. This is often used during the initial blockchain synchronization process.
- GetBlocks (getblocks): Nodes can request a list of block hashes from their peers using the getblocks command. This is another mechanism for synchronizing the blockchain.
- Ping (ping) and Pong (pong): These commands are used for network connectivity testing. A node can send a ping message, and the receiving node responds with a pong message.

These commands, among others, facilitate the decentralized and distributed nature of the Bitcoin network, allowing nodes to share information, propagate transactions and blocks, and maintain consensus on the state of the blockchain. The communication protocol is an integral part of ensuring the security and reliability of the Bitcoin network.

Let's take a simple example. A peer in the network receives a new transaction from someone using the blockchain. This transaction will be signed by the user sending it. The peer will verify the transaction (has the user enough credit to make this transaction, etc.) and then it will add it to the blockchain. Let's say the block now has enough transactions. The user can sign it and send it to all the other peers he knows in the network so that they add this block to the blockchain. We have to remember that the blockchain is decentralized though so another user can be adding a block to the blockchain somewhere else in the world. This other blockchain will be different so we will have multiple different blockchain in the network. This is completely normal and instead of deciding which one to keep, the network will keep on building above these two different blockchains. As soon as one of the blockchain becomes bigger than the other, it will be decided that this is the best blockchain and the other will be removed. This is the reason why you often have to wait for multiple validations on crypto exchanges. You want to make sure that your blockchain is at least 10 or 20 or 30 blocks ahead of other blockchains in the network. Otherwise it would allow you to double spend your money.

To make sure a user has enough credit to make a transaction, the peer checks the UTXOs index to make sure he has a valid balance. Check out UTXO on google for more informations. It's a technical detail.

**Proof of work**

This is what is used in Bitcoin and also the reason why Bitcoin is so power intensive for *miners*. I recommend reading the Bitcoin whitepaper, it is very interesting [https://bitcoin.org/bitcoin.pdf](https://bitcoin.org/bitcoin.pdf).

In the Bitcoin blockchain the peers we call miners are responsible to receive (and share) new transactions. When a block is complete they need to sign it. Once they sign a block they receive a reward for it.

Signing a block is not as easy as I presented it in the asymmetric encryption section, otherwise blocks would be added too fast to the blockchain and it would be easy for any miner to grow a new blockchain that is different from the main blockchain, allowing him to double spend his money. Let's take an example: all the miners add blocks to the main blockchain and share it between them. One malicious miner sends all of his money to a bank in the main blockchain. He then proves to the bank that he has sent all of his money to the bank and the bank adds the money to his bank account. Then the malicious miner creates a second blockchain where he never sent his money and he adds new blocks so fast that the second blockchain becomes bigger than the first blockchain. The second blockchain being bigger than the main blockchain, it would become the main blockchain.

Bitcoin still suffers from that but it is called the 50% percent attack because you need processing power to sign a block and you would need more than 50% of the entire power of blockchain miners to overtake the network by signing blocks faster.

But how do we make signing a block require processing power, this is called proof of work and it uses hasing. 

Hashing is a process that transforms input data (of any size) into a fixed-size string of characters, typically a hash code or hash value, using a mathematical function called a hash function. Hashing is widely used in computer science and cryptography for tasks such as data indexing, integrity verification, and password storage. The resulting hash is unique to the input data, and even a small change in the input produces a significantly different hash.

The idea is to require miners to find a random value to add to a block that causes the hash of the block to have a certain value. In Bitcoin, the target hash value is a dynamically adjusted numerical value that determines the difficulty of mining a new block. Specifically, the hash value must start with a certain number of leading zeros. So let's say we have a block with all of its data and the difficulty is 3, we want to find a value such as "abcd" that will cause the block to output a value starting with to "000". There a many values that are valid but it's difficult to find one. 

Miners usually run these computations on GPU or dedicated processing units that are able to compute hashes very fast.

**Proof of stake**

Proof of Stake (PoS) is a consensus algorithm used in blockchain networks as an alternative to Proof of Work (PoW). In PoS, validators are chosen to create new blocks and validate transactions based on the amount of cryptocurrency they hold and are willing to "stake" as collateral. Unlike PoW, which requires extensive computational power, PoS relies on the economic incentive of participants to maintain network security. Validators are incentivized to act honestly, as they have a stake at risk. PoS aims to address energy concerns associated with PoW, offering a more environmentally friendly approach to securing blockchains. Networks utilizing PoS include Ethereum 2.0, where participants can become validators by staking a minimum amount of Ether. PoS represents a shift towards more energy-efficient and scalable blockchain consensus mechanisms.

**Ethereum and smart contracts**

Ethereum is a decentralized blockchain platform that enables the creation and execution of smart contracts and decentralized applications (DApps). It goes beyond Bitcoin's focus on peer-to-peer digital currency, offering a versatile platform for programmable, self-executing contracts.

Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically enforce and execute the terms when predefined conditions are met, removing the need for intermediaries. The smart contracts are directly embedded inside the blocks of the blockchain and are immutable. This means they can never change.

Ethereum primarily uses a high-level programming language called Solidity for developing smart contracts. Solidity is designed for creating decentralized applications (DApps) on the Ethereum blockchain. It is a statically-typed language influenced by JavaScript, C++, and Python. Developers use Solidity to define the logic of smart contracts, specifying how they should execute when triggered by specific conditions. Ethereum Virtual Machine (EVM) executes Solidity code, ensuring that smart contracts operate consistently across the decentralized network. 

**ERC-20 smart contracts**

ERC-20 stands for Ethereum Request for Comments 20, which is a standard interface for smart contracts that represent fungible tokens on the Ethereum blockchain. Tokens following the ERC-20 standard are easily compatible with various wallets, exchanges, and decentralized applications, fostering interoperability and enabling the creation of diverse token ecosystems on the Ethereum platform. The Metamask wallet for example has support for any smart contract that implements the ERC-20 interface.

In my quest to learn the blockchain and understand how web3, smart contracts and Solidity work I created two smart contracts that I deployed on the ethereum test networks and integrated in a Vue.js website.

The first contract is the ERC-20 token. It needs to define a name, symbol, totalSupply and decimals as well as some functons such as transfer, transferFrom and approve to respect the ERC-20 specification.

```javascript
pragma solidity >=0.4.22 <0.8.0;

contract ChambauCoin {
  uint256 public totalSupply;
  string public name = 'ChambauCoin';
  string public symbol = 'CHAMB';
  uint8 public decimals = 8;
  mapping(address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) public allowance;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  event Approval(address indexed _owner, address indexed _spender, uint256 _value);

  constructor(uint256 _initialSupply) public {
    totalSupply = _initialSupply;
    balanceOf[msg.sender] = _initialSupply;
  }

  function transfer(address _to, uint256 _value) public returns (bool success) {
    require(balanceOf[msg.sender] >= _value, 'revert, balance insufficient');
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;

    emit Transfer(msg.sender, _to, _value);

    return true;
  }

  function transferFrom(
    address _from,
    address _to,
    uint256 _value
  ) public returns (bool success) {
    require(balanceOf[_from] >= _value); // TODO : Test we cannot exceed
    require(allowance[_from][msg.sender] >= _value);
    balanceOf[_from] -= _value;
    balanceOf[_to] += _value;
    allowance[_from][msg.sender] -= _value; // TODO : Test that this goes down and stops working

    emit Transfer(_from, _to, _value);

    return true;
  }

  function approve(address _spender, uint256 _value) public returns (bool success) {
    allowance[msg.sender][_spender] = _value;

    emit Approval(msg.sender, _spender, _value);

    return true;
  }
}
```

The second smart contract is for the initial sale of Chambau coins (ICO). It allows anyone to buy Chambau coins with Ethereum.

```javascript
pragma solidity >=0.4.22 <0.8.0;

import './ChambauCoin.sol';

contract ChambauCoinSale {
  address payable admin;
  ChambauCoin public tokenContract;
  uint256 public tokenPrice;
  uint256 public tokenSold;

  event Sell(address indexed _buyer, uint256 _value);

  constructor(ChambauCoin _tokenContract, uint256 _tokenPrice) public {
    admin = msg.sender;
    tokenContract = _tokenContract;
    tokenPrice = _tokenPrice;
  }

  function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x);
  }

  function buyTokens(uint256 _numberOfTokens) public payable returns (bool success) {
    require(multiply(msg.value, 100000000) == multiply(_numberOfTokens, tokenPrice), 'revert, value not equal to tokens * tokenPrice'); // TODO : Test that
    require(tokenContract.balanceOf(address(this)) >= _numberOfTokens, 'revert, balance insufficient'); // TODO : Test this
    require(tokenContract.transfer(msg.sender, _numberOfTokens), 'revert, transfer failed'); // TODO : Test this

    tokenSold += _numberOfTokens;
    emit Sell(msg.sender, _numberOfTokens);

    return true;
  }

  function endSale() public {
    require(msg.sender == admin);
    require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))), 'revert, transfer failed'); // TODO : Test this
    selfdestruct(admin);
  }
}
```

In order to integrate the smart contract in my website, I used Truffle [https://trufflesuite.com/](https://trufflesuite.com/). It is a suite of tools for the development of smart contracts. It has a javascript library that helps interact with the Metamask extension through its browser API.

Check out the project here: [https://github.com/Drabble/ChambauCoin](https://github.com/Drabble/ChambauCoin).

![assets/posts/2020-08-11-erc20/1.webp](assets/posts/2020-08-11-erc20/1.webp "Website")

*ChambauCoin website including the sale*

![assets/posts/2020-08-11-erc20/2.webp](assets/posts/2020-08-11-erc20/2.webp "ERC-20")

*ChambauCoin in a ERC-20 wallet (Metamask)*
