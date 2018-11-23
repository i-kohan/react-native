import { combineEpics } from 'redux-observable'
import { epics as homeEpics } from '../scenes/Home'

export default combineEpics(
  homeEpics.dayEpics.changeDayEpic,
  homeEpics.dayEpics.initEpic,
  homeEpics.dayEpics.fetchDayEpic
)
