import sha256 = require('js-sha256');

import Block from './block';

import {BlockChainData, BlockData, TransactionData} from './types/class'

export default class Blockchain implements BlockChainData {
    public blocks: BlockData[];
    public difficulty: number;
    
    constructor(genesisBlock: BlockData) {
        this.blocks = [];
        this.difficulty = 1;
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
        while(!hash.startsWith(Array(this.difficulty + 1).join('0'))) {
            block.nonce += 1;
            hash = sha256(block.key);
            console.log(hash);
        }

        return hash;
    }
}