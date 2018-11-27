import { INIT, INIT_SUCCESS } from './types'

export const init = { type: INIT }
export const initSuccess = (programs) => ({ type: INIT_SUCCESS, payload: { programs } })
