import { mergeMap, switchMap,map, catchError, delay } from 'rxjs/operators'

import * as types from './types'
import * as actions from './actions'

import { fetch } from '../../TrainingSchedule/scenes/Day/redux/actions'

import { setProgramToSchedule } from '../../../asyncStorage/schedule'
import { getPrograms, addProgram } from '../../../asyncStorage/programs'

const getDayOfWeek = (date) => date.format('dddd')  

export const initEpic = (action$, state$) => action$.ofType(types.INIT)
  .pipe(
    delay(1000),
    switchMap(() => getPrograms()),
    map(actions.initSuccess)
  )

export const assignEpic = (action$, state$) => action$.ofType(types.ASSIGN_PROGRAM)
  .pipe(
    delay(1000),
    switchMap(({ payload: { program, day } }) => setProgramToSchedule(program, day)),
    mergeMap(() => {
      const currentDate = state$.value.home.day.currentDate
      const currentDay = getDayOfWeek(currentDate)
      return [
        actions.dialogSuccess,
        fetch(currentDay)
      ]
    }),
    catchError(actions.dialogFailure)
  )

export const createProgramEpic = (action$) => action$.ofType(types.CREATE_PROGRAM)
  .pipe(
    delay(1000),
    switchMap(({ payload: { program } }) => { console.log(program) ; return addProgram(program) }),
    map(() => actions.dialogSuccess),
    catchError(actions.dialogFailure)
  )
