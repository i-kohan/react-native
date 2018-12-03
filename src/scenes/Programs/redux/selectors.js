import { createSelector } from 'reselect'
import { root as rootSelector } from '../../../redux/selectors'

export const root = createSelector(rootSelector, state => state.programs)

export const getPrograms = createSelector(root, programs => programs.programs)
export const getLoading = createSelector(root, programs => programs.loading)
export const getDialogState = createSelector(root, programs => programs.dialogState)
export const getSelectedDay = createSelector(root, programs => programs.selectedDay)

