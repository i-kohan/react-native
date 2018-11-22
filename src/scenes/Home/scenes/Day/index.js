import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import { CalendarHeader } from '../components'

import { getCurrentDate } from '../../redux/selectors'

import { dayChange } from '../../redux/actions'


import styles from './styles'

const mapStateToProps = state => ({
  currentDate: getCurrentDate(state)
})

const mapDispatchToProps = dispatch => ({
  dayChange: (direction) => dispatch(dayChange(direction))
})

class Day extends React.Component {
  render() {
    const { currentDate, dayChange } = this.props
    return (
      <View style={styles.containter}>
        <CalendarHeader
          currentDate={currentDate}
          dayChange={dayChange}
        />
      </View>
    )
  }
}

export const DayScene = connect(mapStateToProps)(Day)
