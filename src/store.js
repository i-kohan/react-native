import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'

import { epics as rootEpic } from './redux'
import { reducer as rootReducer } from './redux'

const epicMiddleware = createEpicMiddleware()
let middleware = [epicMiddleware]

// if (__DEV__) {
// 	const logger = createLogger({ collapsed: true });
// 	middleware = [...middleware, logger];
// } else {
// 	middleware = [...middleware];
// }

export default configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )

  epicMiddleware.run(rootEpic)
  return store
}
