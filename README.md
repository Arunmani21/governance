# Governance and DAO

This project implements a governance-based treasury contract on the Ethereum blockchain. The treasury enables users to allocate funds by voting with ERC20 tokens. Users can propose and vote on proposals to distribute funds from the treasury to designated recipients.

## Key Features
- **Governance Mechanism**: Utilizes a decentralized governance mechanism where token holders can propose and vote on how to allocate funds.
- **ERC20 Compatibility**: Integrates with ERC20 tokens, allowing users to use their existing tokens for voting.
- **Transparent and Auditable**: Transactions and fund allocations are transparent and recorded on the Ethereum blockchain, ensuring accountability and auditability.

## Technology Stack & Tools

- Solidity (Writing Smart Contracts)
- Javascript (React & Testing)
- [Web3](https://web3js.readthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [Ganache](https://www.trufflesuite.com/ganache) (For Local Blockchain)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Start Ganache

### 4. Migrate Smart Contracts
`$ truffle migrate --reset`

### 5. Run 1st script
`$ truffle exec .\scripts\1_create_proposal.js`
