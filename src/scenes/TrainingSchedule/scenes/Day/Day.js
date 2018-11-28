import React from 'react'
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import { CalendarHeader } from './components'
import { ProgramsList } from '../../../../components';


import { getCurrentDate, getLoading, getDaySchedule, getModalVisibility } from './redux/selectors'
import { dayChange, init, openModal, closeModal } from './redux/actions'


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
    Actions.TSprogram({ program, title: program.title })
  }

  renderIcons = (id) => (
    <Icon
      iconStyle={{marginRight: 20}}
      size={20}
      name='trash'
      type='font-awesome'
      onPress={() => console.log(id)}
    />
  ) 

  render() {
    const {
      onDayChange,
      currentDate,
      loading,
      daySchedule,
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
            renderIcons={this.renderIcons}
            options={daySchedule}
            onClick={this.routeToProgram}
          />
        )}
      </View>
    )
  }
}

export const DayScene = connect(mapStateToProps, mapDispatchToProps)(Day)
