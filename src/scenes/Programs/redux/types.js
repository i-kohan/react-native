import { createActionNameCurried } from '../../../utils/actions'

const actionCreator = createActionNameCurried('programs')

export const INIT = actionCreator('INIT')
export const INIT_SUCCESS = actionCreator('INIT_SUCCESS')
export const ASSIGN_PROGRAM = actionCreator('ASSIGN_PROGRAM')
export const ASSIGN_SUCCESS = actionCreator('REMOVE_SUCCESS')
export const ASSIGN_FAILED = actionCreator('REMOVE_FAILED')
export const DIALOG_CLOSE = actionCreator('DIALOG_CLOSE')
export const DIALOG_LOADING = actionCreator('DIALOG_LOADING')
export const DIALOG_OPEN = actionCreator('DIALOG_OPEN')
export const SELECT_DAY = actionCreator('SELECT_DAY')
export const MODAL_OPEN = actionCreator('MODAL_OPEN')
export const MODAL_CLOSE = actionCreator('MODAL_CLOSE')