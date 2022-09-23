import * as _ from '../../src/ReaderTask.ts'
import { pipe } from '../../src/function.ts'

//
// Do
//

// $ExpectType ReaderTask<unknown, { readonly a1: number; readonly a2: string; }>
pipe(
  _.Do,
  _.bind('a1', () => _.of<unknown, number>(1)),
  _.bind('a2', () => _.of<unknown, string>('b'))
)
