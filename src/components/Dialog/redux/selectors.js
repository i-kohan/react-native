import { createSelector } from 'reselect'
import { root as rootSelector } from '../../../redux/selectors'

export const root = createSelector(root, state => state.dialog)
export const getLoading = createSelector(root, dialog => dialog.loading)
export const getSuccess = createSelector(root, dialog => dialog.success)
export const getLoading = createSelector(root, dialog => dialog.loading)
export const getLoading = createSelector(root, dialog => dialog.loading)
export const getLoading = createSelector(root, dialog => dialog.loading)

