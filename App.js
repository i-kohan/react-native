import React from 'react'
import { Provider } from 'react-redux'

import { registerScreens } from './src/navigation/AppNavigator'
import configureStore from './src/store'
import AppNavigator from './src/navigation/AppNavigator' 

const store = configureStore({})

export default App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)
