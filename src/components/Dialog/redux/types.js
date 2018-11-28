import { createActionNameCurried } from '../../../utils/actions'

const actionCreator = createActionNameCurried('dialog')

export const OPEN = actionCreator('OPEN')
export const LOADING = actionCreator('LOADING')
export const LOAD_SUCCESS = actionCreator('LOAD_SUCCESS')
export const LOAD_FAILURE =  actionCreator('LOAD_FAILURE')
export const CLOSE = actionCreator('CLOSE')
