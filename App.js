import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './src/store'
import AppNavigator from './src/navigation/AppNavigator' 

const store = configureStore({})

export default App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)
