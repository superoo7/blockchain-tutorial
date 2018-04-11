import Blockchain from './blockchain'
import Block from './block'
import Transaction from './transaction'
import { BlockData, BlockChainData, TransactionData } from './types/class'

describe('Blockchain', () => {
  let gb: BlockData, bc: BlockChainData, t: TransactionData
  let newB: BlockData

  beforeEach(() => {
    // create a genesis block
    gb = new Block()

    // initialize blockchain with genesis block
    bc = new Blockchain(gb)

    // create a transaction
    t = new Transaction('me', 'you', 7)
  })

  it("checks previous block's hash to be Equal to current block previousHash", () => {
    newB = bc.getNextBlock([t])
    expect(newB.previousHash).toEqual(gb.hash)
  })

  it('checks addBlock function', () => {
    let beforeBC = bc.blocks.length // 1
    bc.addBlock(newB)
    let afterBC = bc.blocks.length // 2
    expect(beforeBC).toBe(afterBC - 1)
  })
})
