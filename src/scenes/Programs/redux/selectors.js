import { createSelector } from 'reselect'
import { root as rootSelector } from '../../../redux/selectors'

export const root = createSelector(rootSelector, state => state.programs)

export const getPrograms = createSelector(root, programs => programs.programs)
export const getLoading = createSelector(root, programs => programs.loading)
export const getProgramById = (id) => createSelector(root, programs => programs.programs.find(program => program.id === id))

