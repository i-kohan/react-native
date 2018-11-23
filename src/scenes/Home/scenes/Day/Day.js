import React from 'react'
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator } from 'react-native'

import { CalendarHeader, TrainingDay } from '../components'

import { getCurrentDate, getLoading, getDaySchedule } from './redux/selectors'

import { dayChange, init } from './redux/actions'


import styles from './styles'

const mapStateToProps = state => ({
  currentDate: getCurrentDate(state),
  loading: getLoading(state),
  daySchedule: getDaySchedule(state)
})

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init),
  onDayChange: (days) => dispatch(dayChange(days))
})

class Day extends React.Component {

  componentDidMount() {
    this.props.init()
  }

  render() {
    const { currentDate, onDayChange, loading, daySchedule } = this.props
    return (
      <View style={styles.containter}>
        <CalendarHeader
          currentDate={currentDate}
          dayChange={onDayChange}
        />
        {loading ? (
          <ActivityIndicator size="large" color="0000ff" />
        ) : (
          <TrainingDay 
            day={daySchedule}
          />
        )}
      </View>
    )
  }
}

export const DayScene = connect(mapStateToProps, mapDispatchToProps)(Day)
