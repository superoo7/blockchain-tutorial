import Block from './block'
import Transaction from './transaction'
import { TransactionData, BlockData } from './types/class'

describe('Block', () => {
  let t: TransactionData, b: BlockData

  beforeAll(() => {
    t = new Transaction('you', 'me', 4)
    b = new Block(1, '777', '666', 0, [t])
  })

  it('get the key correctly', () => {
    // [{"from":"you","to":"me","amount":4}]
    // JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce
    expect(b.key).toBe('[{"from":"you","to":"me","amount":4}]16660')
  })

  it('adds transactions successfully', () => {
    let pT = b.transactions.length
    b.addTransaction(t)
    let aT = b.transactions.length
    expect(aT).toBe(pT + 1)
  })
})
