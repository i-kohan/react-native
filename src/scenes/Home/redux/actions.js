export const INIT = 'INIT'
export const INIT_SUCCESS = 'INIT_SUCCESS'
export const DAY_CHANGE = 'DAY_CHANGE'

export const init = { type: INIT }

export const dayChange = ({ direction }) => ({ type: DAY_CHANGE, payload: direction })
export const initSuccess = (payload) => ({ type: INIT_SUCCESS, payload })
