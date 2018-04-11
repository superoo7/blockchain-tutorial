import { BlockData, TransactionData } from './types/class';
export default class Block implements BlockData {
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transactions: TransactionData[];
    constructor(index?: number, hash?: string, previousHash?: string, nonce?: number, transactions?: TransactionData[]);
    readonly key: string;
    addTransaction(transaction: TransactionData): void;
}
