import moment from 'moment'

import {
  INIT_SUCCESS,
  INIT,
  DAY_CHANGED,
  FETCHING,
  FETCH_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL
} from './types'

const initialState = {
  loading: true,
  daySchedule: {},
  currentDate: moment(),
  isModalVisible: false
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
    case OPEN_MODAL: 
      return { ...state, isModalVisible: true }
    case CLOSE_MODAL:
      return { ...state, isModalVisible: false }
    default:
      return state
  }
}