import { expect } from 'chai'
import { arrayToString, stringToArray } from '../lib/main.js'

describe('mongoLike', () => { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  describe('arrayToString', () => { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
    it('[0,1,2]]', () => expect(arrayToString([0, 1, 2])).to.equal(',0,1,2,'))
    it('[]', () => expect(arrayToString([])).to.equal(''))
    it('undefined', () => expect(arrayToString(undefined)).to.equal(''))
    it('null', () => expect(arrayToString(null)).to.equal(''))
  })
  describe('stringToArray', () => { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
    it(',0,1,', () => expect(stringToArray(',0,1,')).to.deep.equal(['0', '1']))
    it(`''`, () => expect(stringToArray('')).to.deep.equal([]))
    it('undefined', () => expect(stringToArray(undefined)).to.deep.equal([]))
    it('null', () => expect(stringToArray(undefined)).to.deep.equal([]))
  })
})
