import Block from './block';
import { BlockChainData, BlockData, TransactionData } from './types/class';
export default class Blockchain implements BlockChainData {
    blocks: BlockData[];
    difficulty: number;
    constructor(genesisBlock: BlockData);
    addBlock(block: BlockData): void;
    getPreviousBlock(): BlockData;
    getNextBlock(transactions: TransactionData[]): Block;
    generateHash(block: BlockData): string;
}
