import { INIT, INIT_SUCCESS } from './types'

const initialState = {
  loading: true,
  programs: []
}

export default reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case INIT: 
      return { ...state, loading: true }
    case INIT_SUCCESS:
      return { ...state, ...payload, loading: false }
    default:
      return state
  }
}