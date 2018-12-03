import { filter, switchMap,map, catchError } from 'rxjs/operators'

import * as types from './types'
import * as actions from './actions'
import { getData } from '../../../api/programs'

import { setProgramToSchedule } from '../../../asyncStorage/programs'

export const initEpic = (action$, state$) => action$.ofType(types.INIT)
  .pipe(
    switchMap(() => getData()),
    map(actions.initSuccess)
  )

export const assignEpic = (action$) => action$.ofType(types.ASSIGN_PROGRAM)
  .pipe(
    switchMap(({ payload: { program, day } }) => setProgramToSchedule(program, day)),
    map(() => actions.assignSuccess),
    catchError(actions.assignFailed)
  )
