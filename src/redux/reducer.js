import { combineReducers } from 'redux'

import { reducer as home } from '../scenes/Home'
import { reducer as programs } from '../scenes/Programs'
// import { reducer as dialog } from '../components/Dialog/redux'

export default combineReducers({
  home,
  programs,
  // dialog
})
