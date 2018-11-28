import { LOADING, LOAD_FAILURE, LOAD_SUCCESS, OPEN, CLOSE } from './types'

const initialState = {
  visible: false,
  loading: false,
  success: false,
  failure: false
}

export default reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case OPEN:
      return { ...state, visible: true }
    case LOADING:
      return { ...state, loading: true }
    case LOAD_FAILURE:
      return { ...state, loading: false, failure: true, success: false }
    case LOAD_SUCCESS:
      return { ...state, loading: false, failure: false, success: true }
    case CLOSE: {
      return { ...state, visible: false, loading: false, success: false, failure: false }
    }
    default:
      return state
  }
}
