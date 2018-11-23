import {
  INIT,
  DAY_CHANGE,
  DAY_CHANGED,
  INIT_SUCCESS,
  FETCHING,
  FETCH_SUCCESS,
  CLOSE_MODAL,
  OPEN_MODAL
} from './types'

export const init = { type: INIT }
export const dayChange = (days) => ({ type: DAY_CHANGE, payload: days })
export const dayChanged = ({ currentDate }) => ({ type: DAY_CHANGED, payload: currentDate })
export const fetch = (currentDay) => ({ type: FETCHING, payload: currentDay })
export const fetchSuccess = (daySchedule) => ({ type: FETCH_SUCCESS, payload: { daySchedule } })
export const initSuccess = (daySchedule) => ({ type: INIT_SUCCESS, payload: { daySchedule } })
export const closeModal = { type: CLOSE_MODAL }
export const openModal = (id) => ({ type: OPEN_MODAL, payload: id })
