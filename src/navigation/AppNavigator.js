import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import * as Routes from '../scenes'

const RouterComponent = () => (
  <Router>
    <Scene
      key="root"
      tabs
      tabBarStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Scene
        key="home" 
        title="Home"
        component={Routes.HomeScene}
        showLabel={false}
        hideNavBar
        // transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })}
      />
      <Scene
        key="profile"
        title="Profile"
        component={Routes.ProfileScene}
        showLabel={false}
        hideNavBar
      />
    </Scene>
  </Router>
);

export default RouterComponent
