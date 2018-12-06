import * as types from './types'
import moment from 'moment'

const initialState = {
  loading: true,
  selectedDay: moment().format('dddd'),
  programs: [],
  modalVisible: false,
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
      return { ...state, dialogState: { ...state.dialogState, isVisible: true, title: 'Assign program' } }
    case types.DIALOG_LOADING:
      return { ...state, dialogState: { ...state.dialogState, isVisible: true, loading: true, title: 'Loading' }}
    case types.DIALOG_SUCCESS:
      return { ...state, dialogState: { ...state.dialogState, isVisible: true, loading: false, success: true, title: 'Success' } }
    case types.DIALOG_FAILURE:
      return { ...state, dialogState: { ...dialogState, isVisible: true, loading: false, failure: true, title: 'Failed' } }
    case types.DIALOG_CLOSE:
      return { ...state, dialogState: { ...initialState.dialogState } }
    case types.SELECT_DAY:
      return { ...state, selectedDay: payload }
    case types.MODAL_CLOSE: 
      return { ...state, modalVisible: false }
    case types.MODAL_OPEN:
      return { ...state, modalVisible: true }
    case types.SELECT_PROGRAM:
      return { ...state, selectedProgram: payload }
    default:
      return state
  }
}