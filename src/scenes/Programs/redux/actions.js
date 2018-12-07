import * as types from './types'

export const init = { type: types.INIT }
export const initSuccess = (programs) => ({ type: types.INIT_SUCCESS, payload: { programs } })
export const selectDay = (day) => ({ type: types.SELECT_DAY, payload: day })
export const assignProgram = (program, day) => ({ type: types.ASSIGN_PROGRAM, payload: { program, day } })
export const dialogSuccess = { type: types.DIALOG_SUCCESS }
export const dialogFailure = { type: types.DIALOG_FAILURE }
export const dialogLoading = { type: types.DIALOG_LOADING }
export const dialogClose = { type: types.DIALOG_CLOSE }
export const dialogOpen = { type: types.DIALOG_OPEN }
export const modalOpen = { type: types.MODAL_OPEN }
export const modalClose = { type: types.MODAL_CLOSE }
export const createProgram = (program) => ({ type: types.CREATE_PROGRAM, payload: { program } })
export const createProgramSuccess = { type: types.CREATE_PROGRAM_SUCCESS }
export const selectProgram = (id) => ({ type: types.SELECT_PROGRAM, payload: id })
export const removeProgram = (id) => ({ type: types.REMOVE_PROGRAM, payload: id })
export const createExercise = (exercise, programId) => ({ type: types.CREATE_EXERCISE, payload: { exercise, programId } })
export const removeExercise = (id) => ({ type: types.REMOVE_EXERCISE, payload: id })
