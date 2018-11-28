import { createActionNameCurried } from '../../utils/actions'

const actionCreator = createActionNameCurried('storage')

export const ADD_PROGRAM = actionCreator('ADD_PROGRAM')
export const REMOVE_PROGRAM = actionCreator('REMOVE_PROGRAM')
