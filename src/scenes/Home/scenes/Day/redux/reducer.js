import moment from 'moment'

import {
  INIT_SUCCESS,
  INIT,
  DAY_CHANGED,
  FETCHING,
  FETCH_SUCCESS
} from './types'

const initialState = {
  loading: true,
  daySchedule: {},
  currentDate: moment()
}

export default reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case INIT:
      return { ...state, loading: true }
    case INIT_SUCCESS: {
      return { ...state, ...payload, loading: false }
    }
    case DAY_CHANGED:
      return { ...state, ...payload }
    case FETCHING:
      return { ...state, loading: true }
    case FETCH_SUCCESS:
      return { ...state, ...payload, loading: false }
    default: 
      return state
  }
}