import * as types from './types'

export const init = { type: types.INIT }
export const initSuccess = (programs) => ({ type: types.INIT_SUCCESS, payload: { programs } })
export const selectDay = (day) => ({ type: types.SELECT_DAY, payload: day })
export const assignProgram = (program, day) => ({ type: types.ASSIGN_PROGRAM, payload: { program, day } })
export const assignSuccess = { type: types.ASSIGN_SUCCESS }
export const assignFailed = { type: types.ASSIGN_FAILED }
export const dialogLoading = { type: types.DIALOG_LOADING }
export const dialogClose = { type: types.DIALOG_CLOSE }
export const dialogOpen = { type: types.DIALOG_OPEN }
