import { createSelector } from 'reselect'
import { root as rootSelector } from '../../../redux/selectors'

export const root = createSelector(rootSelector, state => state.home)
