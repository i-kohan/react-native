import { filter, switchMap, map, mergeMap, catchError, endWith } from 'rxjs/operators'
import {
  INIT,
  DAY_CHANGE,
  FETCHING,
  REMOVE_PROGRAM
} from './types'
import { initSuccess, dayChanged, fetch, fetchSuccess, dialogLoading,removeSuccess, removeFailed } from './actions'
import { getProgramsForDay, removeProgram } from '../../../../../asyncStorage/schedule'
import moment from 'moment'

// TODO: replace to utils
const getDayOfWeek = (date) => moment(date).format('dddd')  

export const initEpic = (action$, state$) => action$.pipe(
  filter(action => action.type === INIT),
  switchMap(() => getProgramsForDay(getDayOfWeek(state$.value.home.day.currentDate))),
  map(initSuccess)
)
  
export const changeDayEpic = (action$, state$) => action$.pipe(
  filter(action => action.type === DAY_CHANGE),
  mergeMap(({ payload }) => {
    const currentDate = state$.value.home.day.currentDate
    const changedDay = currentDate.add(payload, 'day')
    const changedDayName = getDayOfWeek(changedDay)
    return [
      dayChanged({ currentDate: changedDay }),
      fetch(changedDayName)
    ]
  })
)

export const fetchDayEpic = (action$) => action$.ofType(FETCHING)
.pipe(
  switchMap(({ payload }) => getProgramsForDay(payload)),
  map(fetchSuccess)
)

export const removeProgramEpic = (action$, state$) => action$.ofType(REMOVE_PROGRAM)
  .pipe(
    switchMap(({ payload }) => {
      const currentDate = state$.value.home.day.currentDate
      const currentDay = getDayOfWeek(currentDate)
      return removeProgram(payload, currentDay) 
    }),
    mergeMap(() => {
      const currentDate = state$.value.home.day.currentDate
      const currentDay = getDayOfWeek(currentDate)
      return [
        fetch(currentDay),
        removeSuccess,
      ]
    }),
    catchError(removeFailed),
  )
// action$.pipe(
//   filter(action => action.type === REMOVE_PROGRAM),
//   switchMap(({ payload }) => removeProgram(payload)),
//   map(() => removeSuccess),
//   startWith(dialogLoading),
//   catchError(removeFailed),
// )
