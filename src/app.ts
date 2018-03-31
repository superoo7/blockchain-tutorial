import Blockchain from './blockchain';
import Block from './block';


let b = new Block();
let bc = new Blockchain(b);


console.log(bc.blocks);