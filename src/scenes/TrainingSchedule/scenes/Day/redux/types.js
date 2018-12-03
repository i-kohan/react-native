import { createActionNameCurried } from '../../../../../utils/actions'

const actionCreator = createActionNameCurried('day')

export const DAY_CHANGE = actionCreator('DAY_CHANGE')
export const DAY_CHANGED = actionCreator('DAY_CHANGED')
export const INIT = actionCreator('INIT')
export const INIT_SUCCESS = actionCreator('INIT_SUCCESS')
export const FETCHING = actionCreator('FETCHING')
export const FETCH_SUCCESS = actionCreator('FETCH_SUCCESS')
export const OPEN_MODAL = actionCreator('OPEN_MODAL')
export const CLOSE_MODAL = actionCreator('CLOSE_MODAL')
export const REMOVE_PROGRAM = actionCreator('REMOVE_PROGRAM')
export const REMOVE_SUCCESS = actionCreator('REMOVE_SUCCESS')
export const REMOVE_FAILED = actionCreator('REMOVE_FAILED')
export const DIALOG_CLOSE = actionCreator('DIALOG_CLOSE')
export const DIALOG_LOADING = actionCreator('DIALOG_LOADING')
export const DIALOG_OPEN = actionCreator('DIALOG_OPEN')
export const SELECT_PROGRAM = actionCreator('SELECT_PROGRAM')
