import { createSelector } from 'reselect'
import { root as rootSelector } from '../../../redux/selectors'

export const root = createSelector(rootSelector, home => home.day)

export const getCurrentDate = createSelector(root, day => day.currentDate)
export const getLoading = createSelector(root, day => day.loading)
export const getDaySchedule = createSelector(root, day => day.daySchedule)
export const getDialogState = createSelector(root, day => day.dialogState)
export const getSelectedProgram = createSelector(root, day => day.selectedProgram)
