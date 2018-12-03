import {
  INIT,
  DAY_CHANGE,
  DAY_CHANGED,
  INIT_SUCCESS,
  FETCHING,
  FETCH_SUCCESS,
  CLOSE_MODAL,
  OPEN_MODAL,
  REMOVE_PROGRAM,
  REMOVE_SUCCESS,
  REMOVE_FAILED,
  DIALOG_LOADING,
  DIALOG_CLOSE,
  DIALOG_OPEN,
  SELECT_PROGRAM
} from './types'

export const init = { type: INIT }
export const dayChange = (days) => ({ type: DAY_CHANGE, payload: days })
export const dayChanged = ({ currentDate }) => ({ type: DAY_CHANGED, payload: currentDate })
export const fetch = (currentDay) => ({ type: FETCHING, payload: currentDay })
export const fetchSuccess = (daySchedule) => ({ type: FETCH_SUCCESS, payload: { daySchedule } })
export const initSuccess = (daySchedule) => ({ type: INIT_SUCCESS, payload: { daySchedule } })
export const closeModal = { type: CLOSE_MODAL }
export const openModal = (id) => ({ type: OPEN_MODAL, payload: id })
export const removeProgramAct = (id) => ({ type: REMOVE_PROGRAM, payload: id })
export const removeSuccess = { type: REMOVE_SUCCESS }
export const removeFailed = { type: REMOVE_FAILED }
export const dialogLoading = { type: DIALOG_LOADING }
export const dialogClose = { type: DIALOG_CLOSE }
export const dialogOpen = { type: DIALOG_OPEN }
export const selectProgram = (id) => ({ type: SELECT_PROGRAM, payload: id })
