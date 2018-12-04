import { createActionNameCurried } from '../../../utils/actions'

const actionCreator = createActionNameCurried('programs')

export const INIT = actionCreator('INIT')
export const INIT_SUCCESS = actionCreator('INIT_SUCCESS')
export const ASSIGN_PROGRAM = actionCreator('ASSIGN_PROGRAM')
export const DIALOG_SUCCESS = actionCreator('DIALOG_SUCCESS')
export const DIALOG_FAILURE = actionCreator('DIALOG_FAILURE')
export const DIALOG_CLOSE = actionCreator('DIALOG_CLOSE')
export const DIALOG_LOADING = actionCreator('DIALOG_LOADING')
export const DIALOG_OPEN = actionCreator('DIALOG_OPEN')
export const SELECT_DAY = actionCreator('SELECT_DAY')
export const MODAL_OPEN = actionCreator('MODAL_OPEN')
export const MODAL_CLOSE = actionCreator('MODAL_CLOSE')
export const CREATE_PROGRAM = actionCreator('CREATE_PROGRAM')
export const CREATE_PROGRAM_SUCCESS = actionCreator('CREATE_PROGRAM_SUCCESS')
export const CREATE_PROGRAM_FAILURE = actionCreator('CREATE_PROGRAM_FAILURE')