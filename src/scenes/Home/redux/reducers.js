import { INIT, INIT_SUCCESS } from './actions'
import moment from 'moment'

const initialState = {
  data: {},
  loading: true,
  currentDate: moment()
}

export default reducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log(type, payload)
  switch (type) {
    case INIT: 
      return { ...state, loading: true }
    case INIT_SUCCESS: 
      return { ...state, ...payload, loading: false }
    default:
      return state
  }
}
