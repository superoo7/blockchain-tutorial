import { TransactionData } from './types/class';
export default class Transaction implements TransactionData {
    from: string;
    to: string;
    amount: number;
    constructor(from: string, to: string, amount: number);
}
