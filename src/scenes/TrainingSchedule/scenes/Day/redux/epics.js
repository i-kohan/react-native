import { filter, switchMap, map, mergeMap } from 'rxjs/operators'
import { INIT, DAY_CHANGE, FETCHING } from './types'
import { initSuccess, dayChanged, fetch, fetchSuccess } from './actions'
import { getPrograms } from '../../../../../asyncStorage/programs'
import moment from 'moment'

// TODO: replace to utils
const getDayOfWeek = (date) => moment(date).format('dddd')  

export const initEpic = (action$, state$) => action$.pipe(
  filter(action => action.type === INIT),
  switchMap(() => getPrograms(getDayOfWeek(state$.value.home.day.currentDate))),
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

export const fetchDayEpic = (action$) => action$.pipe(
  filter(action => action.type === FETCHING),
  switchMap(({ payload }) => getPrograms(payload)),
  map(fetchSuccess)
)
