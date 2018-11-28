import React from 'react'
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator } from 'react-native'

import { CalendarHeader, TrainingDay, ModalContent } from './components'
import { ProgramsList } from '../../../../components';


import { getCurrentDate, getLoading, getDaySchedule, getModalVisibility } from './redux/selectors'

import { dayChange, init, openModal, closeModal } from './redux/actions'
import { Actions } from 'react-native-router-flux'


import styles from './styles'

const mapStateToProps = state => ({
  currentDate: getCurrentDate(state),
  loading: getLoading(state),
  daySchedule: getDaySchedule(state),
})

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init),
  onDayChange: (days) => dispatch(dayChange(days)),
})

class Day extends React.PureComponent {

  componentDidMount() {
    this.props.init()
  }

  routeToProgram = (program) => () => {
    Actions.program({ program, title: program.title })
  }

  render() {
    const {
      onDayChange,
      currentDate,
      loading,
      daySchedule,
      isModalVisible
    } = this.props
    return (
      <View style={styles.containter}>
        <CalendarHeader
          currentDate={currentDate}
          dayChange={onDayChange}
        />
        {loading ? (
          <ActivityIndicator size="large" color="0000ff" />
        ) : (
          <ProgramsList
            options={daySchedule}
            onClick={this.routeToProgram}
          />
        )}
      </View>
    )
  }
}

export const DayScene = connect(mapStateToProps, mapDispatchToProps)(Day)
