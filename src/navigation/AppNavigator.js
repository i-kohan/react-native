import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Scene, Router, Modal, Lightbox } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'

import * as Routes from '../scenes'

import styles from './styles'

const TabIcon = (name) => ({ focused }) => (
  <Icon name={name} type='font-awesome' color={focused ? 'green' : 'black'}/>
)

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="tabbar"
        hideNavBar
        duration={1}
        tabs
        tabBarStyle={styles.tabBarStyle}
      >
        <Scene
          key="home"
          title="Training Day"
          icon={TabIcon('calendar')}
          tabBarLabel=''>
          <Scene
            rightButtonIconStyle={{width: 50, height: 50}}
            rightButtonImage={{uri: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/plus_round-512.png"}}
            onRight={({ navigation }) => { /*navigation.state.params*/ return null }}
            key="traingingPage"
            component={Routes.HomeScene}
            title="Training day" />
        </Scene>
        <Scene key="programs" title="Programs" initial icon={TabIcon('list-ul')}>
          <Scene
            key="programs"
            title="Training programs"
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
