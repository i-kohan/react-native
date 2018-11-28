import { ADD_PROGRAM, REMOVE_PROGRAM } from './types'

export const addProgram = (program) => ({ type: ADD_PROGRAM, payload: { program } })
export const removeProgram = (id) => ({ type: REMOVE_PROGRAM, payload: { id } })
