import React from 'react'
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator } from 'react-native'

import { CalendarHeader, TrainingDay, ModalContent } from './components'

import { getCurrentDate, getLoading, getDaySchedule, getModalVisibility } from './redux/selectors'

import { dayChange, init, openModal, closeModal } from './redux/actions'


import styles from './styles'

const mapStateToProps = state => ({
  currentDate: getCurrentDate(state),
  loading: getLoading(state),
  daySchedule: getDaySchedule(state),
  isModalVisible: getModalVisibility(state) 
})

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init),
  onDayChange: (days) => dispatch(dayChange(days)),
  openModal: (id) => dispatch(openModal(id)),
  closeModal: () => dispatch(closeModal)
})

class Day extends React.PureComponent {

  componentDidMount() {
    this.props.init()
  }

  render() {
    const {
      openModal,
      closeModal,
      onDayChange,
      currentDate,
      loading,
      daySchedule,
      isModalVisible
    } = this.props
    console.log(isModalVisible)
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
            openModal={openModal}
            closeModal={closeModal}
            day={daySchedule}
          />
        )}
        {/* <ModalContent
          isModalVisible={isModalVisible}  
        /> */}
      </View>
    )
  }
}

export const DayScene = connect(mapStateToProps, mapDispatchToProps)(Day)
