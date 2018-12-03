import * as types from './types'
import moment from 'moment'

const initialState = {
  loading: true,
  selectedDay: moment(),
  programs: [],
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
    case types.DIALOG_OPEN:
      return { ...state, dialogState: { ...state.dialogState, isVisible: true, title: 'Remove program' } }
    case types.DIALOG_LOADING:
      return { ...state, dialogState: { ...state.dialogState, loading: true, title: 'Loading' }}
    case types.ASSIGN_SUCCESS:
      return { ...state, dialogState: { ...state.dialogState, loading: false, success: true, title: 'Success' } }
    case types.ASSIGN_FAILED:
      return { ...state, dialogState: { ...dialogState, loading: false, failure: true, title: 'Failed' } }
    case types.DIALOG_CLOSE:
      return { ...state, dialogState: { ...initialState.dialogState } }
    case types.SELECT_DAY:
      return { ...state, selectedDay: payload }
    default:
      return state
  }
}