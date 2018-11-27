import { combineEpics } from 'redux-observable'
import { epics as homeEpics } from '../scenes/Home'
import { epics as programsEpics } from '../scenes/Programs'

export default combineEpics(
  homeEpics.dayEpics.changeDayEpic,
  homeEpics.dayEpics.initEpic,
  homeEpics.dayEpics.fetchDayEpic,
  programsEpics.initEpic
)
