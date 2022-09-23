import * as _ from '../src/Alternative.ts'
import * as O from '../src/Option.ts'
import * as U from './util.ts'

describe('Alternative', () => {
  it('altAll', () => {
    const altAll = _.altAll(O.Alternative)
    U.deepStrictEqual(altAll([]), O.none)
    U.deepStrictEqual(altAll([O.none]), O.none)
    U.deepStrictEqual(altAll([O.none, O.some(1)]), O.some(1))
  })
})
