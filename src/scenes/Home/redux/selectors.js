import { createSelector } from 'reselect'
import { root as rootSelector } from '../../../redux/selectors'

const root = createSelector(rootSelector, state => state.home)

export const getCount = createSelector(root, home => home.count)
export const getLoading = createSelector(root, home => home.loading)
export const getCurrentDate = createSelector(root, home => home.currentDate)
