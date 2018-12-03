import moment from 'moment'

import * as types from './types'

const initialState = {
  loading: true,
  daySchedule: {},
  currentDate: moment(),
  selectedProgram: '',
  dialogState: { 
    isVisible: false,
    success: false,
    failure: false,
    loading: false,
    title: ''
  }
}

export default reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.INIT:
      return { ...state, loading: true }
    case types.INIT_SUCCESS:
      return { ...state, ...payload, loading: false }
    case types.DAY_CHANGED:
      return { ...state, ...payload }
    case types.FETCHING:
      return { ...state, loading: true }
    case types.FETCH_SUCCESS:
      return { ...state, ...payload, loading: false }
    case types.DIALOG_OPEN:
      return { ...state, dialogState: { ...state.dialogState, isVisible: true, title: 'Remove program' } }
    case types.DIALOG_LOADING:
      return { ...state, dialogState: { ...state.dialogState, loading: true, title: 'Loading' }}
    case types.REMOVE_SUCCESS:
      return { ...state, dialogState: { ...state.dialogState, loading: false, success: true, title: 'Success' } }
    case types.REMOVE_FAILED:
      return { ...state, dialogState: { ...dialogState, loading: false, failure: true, title: 'Failed' } }
    case types.DIALOG_CLOSE:
      return { ...state, dialogState: { ...initialState.dialogState } }
    case types.SELECT_PROGRAM:
      return { ...state, selectedProgram: payload }
    default:
      return state
  }
}