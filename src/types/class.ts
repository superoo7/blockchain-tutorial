export interface TransactionData {
    from: string;
    to: string;
    amount: number;
}

export interface BlockData {
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transactions: TransactionData[];
    key: string;
    addTransaction(transaction: TransactionData): void;
}

export interface BlockChainData {
    blocks: BlockData[];
    difficulty: number;
    addBlock(block: BlockData): void;
    getNextBlock(transations: TransactionData[]): BlockData;
    getPreviousBlock(): BlockData;
    generateHash(block: BlockData): string;
}
