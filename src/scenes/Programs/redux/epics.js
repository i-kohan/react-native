import { filter, switchMap,map } from 'rxjs/operators'

import { INIT } from './types'
import { initSuccess } from './actions'
import { getData } from '../../../api/programs'

export const initEpic = (action$, state$) => action$.pipe(
  filter(action => action.type === INIT),
  switchMap(() => getData()),
  map(initSuccess)
) 