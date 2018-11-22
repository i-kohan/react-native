import React from 'react'
import moment from 'moment'
import { compose } from 'redux'
import { withHandlers, withProps } from 'recompose'
import { Button, Text, View, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

const CalendarHeaderComponent = ({ currentDay, onChange }) => (
  <View style={styles.containter}>
    <TouchableOpacity
      style={[styles.button, styles.leftButton]}
      onPress={() => onChange(1)}
    >
      <Icon
        name='chevron-left'
        type='font-awesome' 
      />
    </TouchableOpacity>
    <Text>{currentDay}</Text>
    <TouchableOpacity
      style={[styles.button, styles.rightButton]}
      onPress={() => onChange(-1)}
    >
      <Icon
        name='chevron-right'
        type='font-awesome'
      />
    </TouchableOpacity>
  </View>
)

export const CalendarHeader = compose(
  withProps(props => ({
      currentDay: moment(props.currentDate).format('dddd')
  })),
  withHandlers({
    onChange: props => (direction) => {
      props.dayChange(direction)
    }
  })
)(CalendarHeaderComponent)
