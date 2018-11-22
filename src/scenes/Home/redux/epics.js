import { filter, switchMap, map } from 'rxjs/operators'
import { INIT, DAY_CHANGE, initSuccess } from './actions'
import { getData } from '../api/api'

export const initEpic = action$ => action$.pipe(
  filter(action => action.type === INIT),
  switchMap(() => getData()),
  map(data => initSuccess(data))
)
  
export const changeDayEpic = (action$, state$) => action$.pipe(
  filter(action => action.type === DAY_CHANGE),
  map(({ payload }) => {
    console.log(state$, payload)
  })
)
