import * as _ from '../../src/Console.ts'
import { flow, pipe } from '../../src/function.ts'
import * as TE from '../../src/TaskEither.ts'

// $ExpectType TaskEither<unknown, string>
pipe(TE.right('a'), TE.chainFirst(flow(_.error, TE.fromIO)))

// $ExpectType TaskEither<unknown, string>
pipe(TE.right('a'), TE.chainFirst(flow(_.info, TE.fromIO)))

// $ExpectType TaskEither<unknown, string>
pipe(TE.right('a'), TE.chainFirst(flow(_.log, TE.fromIO)))

// $ExpectType TaskEither<unknown, string>
pipe(TE.right('a'), TE.chainFirst(flow(_.warn, TE.fromIO)))
