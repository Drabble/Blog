Following the NFT (non-fungible tokens) craze I decided to understand how the ERC-721 specification worked and was integrated in websites such as OpenSea.

This post is a follow-up on my other post on [the blockchain and ERC-20 tokens](/post/2020-08-11-erc20).

There are a few NFT specifications but ERC-721 [https://eips.ethereum.org/EIPS/eip-721](https://eips.ethereum.org/EIPS/eip-721) is the most common one. It is supported by https://opensea.io and most other NFT platforms.

**Non-Fungible Tokens (NFTs)**

NFTs are unique digital assets that represent ownership or proof of authenticity for a specific item, often using blockchain technology. Unlike fungible tokens, each NFT is distinct and cannot be replaced or exchanged on a one-to-one basis. NFTs have gained prominence in various industries, including art, gaming, and entertainment, providing a verifiable and transparent way to represent ownership and provenance in the digital realm.

**NFT Generation**

A friend of mine developed a robust Python-based generator designed to dynamically create unique weapons images for video games. Leveraging algorithms and logic, the generator ensures that each weapon possesses distinctive attributes, contributing to the overall diversity and rarity of the NFT collection.

**ERC-721 Smart Contracts and OpenZeppelin**

I Implemented Ethereum Request for Comments 721 (ERC-721) smart contracts, utilizing the widely adopted OpenZeppelin standards through Truffle and Solidity. ERC-721 provides a blueprint for creating non-fungible tokens on the Ethereum blockchain, ensuring each token's uniqueness and indivisibility, crucial for representing one-of-a-kind weapons in the NFT ecosystem. 

OpenZeppelin smart contracts are fully tested and validated smart contracts that can be used and extended with new features.

**Web3 Website**

I created an interactive website using Web3, allowing users to seamlessly connect their MetaMask wallets. The user-friendly interface facilitates the minting process, enabling users to claim ownership of new ERC-721 tokens directly through the website. This integration provides a smooth and accessible user experience for participants in the project.

**Minting Process**

Users can actively participate in the project by minting new NFTs through the website. The minting process involves the generation and creation of fresh ERC-721 tokens, each representing a distinct weapon. This process not only engages users but also contributes to the expansion and diversity of the overall NFT collection.

**Opensea Integration**

To facilitate seamless integration with OpenSea, one of the most popular NFT marketplaces. Users can conveniently view, manage, and potentially trade their minted weapons directly on OpenSea. This integration broadens the reach of the project, connecting with a larger audience of collectors and enthusiasts within the thriving NFT ecosystem.

**Metadata on IPFS**

To ensure the decentralization and accessibility of NFT metadata by storing it on the InterPlanetary File System (IPFS). IPFS provides a distributed and resilient storage solution, guaranteeing that the metadata associated with each weapon NFT remains available and tamper-proof, fostering transparency and reliability.

**Pinata Hosting**

I used Pinata to host content on IPFS, enhancing the reliability and accessibility of the project's metadata. Pinata serves as a convenient and dependable infrastructure, ensuring that the IPFS-based data, including weapon attributes and details, is efficiently stored and served to users. As IPFS is a decentralised network, we need to ensure that at least a few nodes will host the data. It is very similar to torrents, if no peer in the network stores the data, it can be lost forever.

![Metaforge website](assets/posts/2021-07-21-metaforge/1.webp "Metaforge website")

*The metaforge website*