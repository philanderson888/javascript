var blockChainFunction = () => {
// see https://medium.com/geekculture/blockchain-explained-in-50-lines-of-code-1dbf4eda0201
//  yarn add crypto-js --save
console.log('starting blockchain app')
const hash = require("crypto-js/sha256");

const block1 = new Block(null,"block 1 data")
class Block {
  constructor(previousHash, data) {
    this.data = data;
    this.hash = this.calculateHash();
    this.previousHash = previousHash;
    this.timeStamp = new Date();
    this.proofOfWork = 0;
  }

  calculateHash() {
    return hash(
        this.previousHash + 
        JSON.stringify(this.data) +
        this.timeStamp +
        this.proofOfWork
    ).toString();
  }

  mine(difficulty) {
    while (!this.hash.startsWith("0".repeat(difficulty))) {
      this.proofOfWork++;
      this.hash = this.calculateHash();
    }
  }
}

class Blockchain {
  constructor() {
    let genesisBlock = new Block("0", { isGenesis: true });
    this.chain = [genesisBlock];
    console.log(this.chain);
  }

  addBlock(data) {
    let lastBlock = this.chain[this.chain.length - 1];
    let newBlock = new Block(lastBlock.hash, data);
    newBlock.mine(2); // find a hash for new block
    this.chain.push(newBlock);
    console.log(this.chain);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      if (currentBlock.hash != currentBlock.calculateHash()) return false;
      if (currentBlock.previousHash != previousBlock.hash) return false;
    }
    return true;
  }
}

};

module.exports.blockChainFunction = blockChainFunction;

