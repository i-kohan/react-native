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
        <Scene key="home" icon={TabIcon('calendar')} title="Training Shedule">
          <Scene
            rightButtonIconStyle={{width: 50, height: 50}}
            rightButtonImage={{uri: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/plus_round-512.png"}}
            onRight={({ navigation }) => navigation.state.params.addProgram()}
            key="traingingPage"
            component={Routes.TrainingScheduleScene}
            title="Training day"
          />
        </Scene>
        <Scene initial key="programs" icon={TabIcon('list-ul')} title="Programs" >
          <Scene
            rightButtonIconStyle={{width: 50, height: 50}}
            rightButtonImage={{uri: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/plus_round-512.png"}}
            onRight={({ navigation }) => navigation.state.params.addProgram()}
            key="programs"
            title="Training programs"
            initial
            component={Routes.ProgramsScene}
          />
        </Scene>
      </Scene>
      <Scene
        modal
        hideNavBar
        rightButtonIconStyle={{width: 40, height: 40}}
        rightButtonImage={{uri: "https://elearn.southampton.ac.uk/wp-content/blogs.dir/sites/64/2016/10/assign.png"}}
        onRight={({ navigation }) => navigation.state.params.addProgram()}
        key="Pprogram"
        component={Routes.ProgramScene}
        title="Program"
        direction="verical"
      />
      <Scene
        modal
        key="TSprogram"
        component={Routes.ProgramScene}
        title="Program"
        direction="verical"
      />
    </Scene>
  </Router>
);

export default RouterComponent
