import { combineEpics } from 'redux-observable'
import { epics as trainingScheduleEpics } from '../scenes/TrainingSchedule'
import { epics as programsEpics } from '../scenes/Programs'

export default combineEpics(
  trainingScheduleEpics.dayEpics.changeDayEpic,
  trainingScheduleEpics.dayEpics.initEpic,
  trainingScheduleEpics.dayEpics.fetchDayEpic,
  trainingScheduleEpics.dayEpics.removeProgramEpic,
  programsEpics.initEpic,
  programsEpics.assignEpic
)
