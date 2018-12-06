import * as types from './types'

export const init = { type: types.INIT }
export const dayChange = (days) => ({ type: types.DAY_CHANGE, payload: days })
export const dayChanged = ({ currentDate }) => ({ type: types.DAY_CHANGED, payload: currentDate })
export const fetch = (currentDay) => ({ type: types.FETCHING, payload: currentDay })
export const fetchSuccess = (daySchedule) => ({ type: types.FETCH_SUCCESS, payload: { daySchedule } })
export const initSuccess = (daySchedule) => ({ type: types.INIT_SUCCESS, payload: { daySchedule } })
export const closeModal = { type: types.CLOSE_MODAL }
export const openModal = (id) => ({ type: types.OPEN_MODAL, payload: id })
export const removeProgram = (id) => ({ type: types.REMOVE_PROGRAM, payload: id })
export const removeSuccess = { type: types.REMOVE_SUCCESS }
export const removeFailed = { type: types.REMOVE_FAILED }
export const dialogLoading = { type: types.DIALOG_LOADING }
export const dialogClose = { type: types.DIALOG_CLOSE }
export const dialogOpen = { type: types.DIALOG_OPEN }
export const selectProgram = (id) => ({ type: types.SELECT_PROGRAM, payload: id })
