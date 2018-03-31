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
//    getNextBlock(transations: TransactionData[]): BlockData;
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

    public generateHash(block: BlockData) {
        return '';
    }
}