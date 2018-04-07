import  {TransactionData} from './types/class'

export default class Transaction implements TransactionData {
    constructor(
        public from: string,
        public to: string,
        public amount: number
    ) {

    }
}