// external library
import * as express from 'express';
import * as bodyParser from 'body-parser';

// Our classes
import Blockchain from './blockchain';
import Block from './block';
import Transaction from './transaction';
import { TransactionData } from './types/class';

// Setup express REST API
const app = express();
app.use(bodyParser.json());

// Initialize Blockchain
// create a genesis block
let genesisBlock = new Block();
// initialize blockchain with genesis block
let bc = new Blockchain(genesisBlock);
// Transactions
let transactions: TransactionData[] = [];


app.get('/', function(req, res){
    res.json(bc.blocks);
})

app.post('/transaction', function(req, res) {
    let {from, to, amount} = req.body;
    // create a transaction
    let t = new Transaction(from, to, amount);
    transactions = [...transactions, t];    
    res.json(t);
})

app.get('/mine', function(req, res) {
    // mining part
    let newB = bc.getNextBlock(transactions);
    transactions = [];
    bc.addBlock(newB);
    res.json(bc);
})

// Start the server at port 3000
app.listen(3000, function() {
    console.log('post started at 3000')
})