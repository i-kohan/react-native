import { combineReducers } from 'redux'

import { reducer as home } from '../scenes/Home'
import { reducer as programs } from '../scenes/Programs'

export default combineReducers({
  home,
  programs
})
