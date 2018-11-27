import { createActionNameCurried } from '../../../utils/actions'

const actionCreator = createActionNameCurried('programs')

export const INIT = actionCreator('INIT')
export const INIT_SUCCESS = actionCreator('INIT_SUCCESS')
