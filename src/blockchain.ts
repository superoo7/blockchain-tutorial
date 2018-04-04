import sha256 = require('js-sha256');

import Block from './block';

interface TransactionData {
    from: string;
    to: string;
    amount: number;
}

interface BlockData {
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transactions: TransactionData[];
    key: string;
}

interface BlockChainData {
    blocks: BlockData[];
    addBlock(block: BlockData): void;
    getNextBlock(transations: TransactionData[]): BlockData;
    getPreviousBlock(): BlockData;
    generateHash(block: BlockData): string;
}

export default class Blockchain implements BlockChainData {
    public blocks: BlockData[];


    constructor(genesisBlock: BlockData) {
        this.blocks = [];
        this.addBlock(genesisBlock);
    }

    public addBlock(block: BlockData): void {
        // if genesis block
        if (this.blocks.length === 0) {
            block.previousHash = "0000000000";
            block.hash = this.generateHash(block);
        }        
        this.blocks = [...this.blocks, block];
    }

    public getPreviousBlock(): BlockData {
        return this.blocks[this.blocks.length - 1];
    }

    public getNextBlock(transactions: TransactionData[]) {
        let block = new Block();

        transactions.map(function(t: TransactionData) {
            block.addTransaction(t);
        })

        let previousBlock = this.getPreviousBlock();
        block.index = this.blocks.length;
        block.previousHash = previousBlock.hash;
        block.hash = this.generateHash(block);

        return block;

    }

    public generateHash(block: BlockData) {
        let hash = sha256(block.key);
        
        // mining
        while(!hash.startsWith('7a7')) {
            block.nonce += 1;
            hash = sha256(block.key);
            console.log(hash);
        }

        return hash;
    }
}