import React from 'react'
import { View } from 'react-native'

import { DayScene } from './scenes'

import styles from './styles'

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <DayScene />
      </View>
    )
  }
}
export const HomeScene = Home
