import React from 'react'
import { Scene, Router, Modal, Lightbox } from 'react-native-router-flux'

import * as Routes from '../scenes'

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="tabbar"
        hideNavBar
        tabs
        tabBarStyle={{ backgroundColor: '#FFFFFF' }}
      >
        <Scene key="home" title="Training Day">
          <Scene
            key="traingingPage"
            component={Routes.HomeScene}
            title="Training day"
            hideNavBar />
        </Scene>
        <Scene key="programs" title="Programs" initial>
          <Scene
            key="programs"
            title="Programs"
            hideNavBar
            initial
            component={Routes.ProgramsScene} />
        </Scene>
      </Scene>
      <Scene
        modal
        key="program"
        component={Routes.ProgramScene}
        title="Program"
        direction="verical" />
    </Scene>
  </Router>
);

export default RouterComponent
