import { combineEpics } from 'redux-observable'
import { intisEpic } from '../scenes/Home/redux/epics'

export default combineEpics(
  intisEpic
)
