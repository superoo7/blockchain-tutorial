import Blockchain from './blockchain';
import Block from './block';
import Transaction from './transaction';

// create a genesis block
let b = new Block();

// initialize blockchain with genesis block
let bc = new Blockchain(b);

// create a transaction
let t = new Transaction('me', 'you', 7);

// mining part
let newB = bc.getNextBlock([t]);
bc.addBlock(newB);

console.log(bc.blocks[1].transactions);
