import * as U from './util.ts'
import { semigroupString } from '../src/Semigroup.ts'
import * as _ from '../src/ValidationT.ts'
import * as IO from '../src/IO.ts'
import * as E from '../src/Either.ts'

describe('ValidationT', () => {
  describe('getValidationM', () => {
    const VT = _.getValidationM(semigroupString, IO.Monad)

    it('chain', () => {
      const f = (n: number) => (n > 0 ? IO.of(E.right(n * 2)) : IO.of(E.left('b')))
      U.deepStrictEqual(VT.chain(IO.of(E.right(1)), f)(), E.right(2))
      U.deepStrictEqual(VT.chain(IO.of(E.right(-1)), f)(), E.left('b'))
      U.deepStrictEqual(VT.chain(IO.of(E.left('a')), f)(), E.left('a'))
    })

    it('alt', () => {
      U.deepStrictEqual(VT.alt(IO.of(E.right(1)), () => IO.of(E.right(2)))(), E.right(1))
      U.deepStrictEqual(VT.alt(IO.of(E.right(1)), () => IO.of(E.left('b')))(), E.right(1))
      U.deepStrictEqual(VT.alt(IO.of(E.left('a')), () => IO.of(E.right(2)))(), E.right(2))
      U.deepStrictEqual(VT.alt(IO.of(E.left('a')), () => IO.of(E.left('b')))(), E.left('ab'))
    })
  })
})
