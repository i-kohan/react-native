import { combineReducers } from 'redux'

import { reducer as home } from '../scenes/TrainingSchedule'
import { reducer as programs } from '../scenes/Programs'

export default combineReducers({
  home,
  programs,
})
