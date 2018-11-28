import React from 'react'
import { connect } from 'react-redux'
import { View, ActivityIndicator, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import { CalendarHeader } from './components'
import { ProgramsList, DialogComponent } from '../../../../components'

import { removeProgram } from '../../../../asyncStorage/programs'

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

  state = {
    programIdRemove: '',
    dialogVisible: false
  }

  componentDidMount() {
    this.props.init()
  }

  openDayDialog = (id) => () => {
    this.setState({ dialogVisible: true, programIdRemove: id })
  }
  
  closeDayDialog = () => {
    this.setState({ dialogVisible: false })
  }

  removeProgram = (setDialogState) => async () => {
    const { currentDate } = this.props
    const { programIdRemove } = this.state
    setDialogState({ loading: true, title: 'Loading' })
    try {
      await removeProgram(programIdRemove, currentDate.format('dddd'))
      setDialogState({ success: true, title: 'Removed successfully' })
    } catch (err) {
      setDialogState({ failure: true, title: 'Removing failed' })
    }
  } 

  renderConfirm = (setDialogState) => () => (
    <View style={styles.confirmButtons}>
      <View style={{marginRight: 8}} >
        <Button title='Yes' onPress={this.removeProgram(setDialogState)} />
      </View>
      <Button title='No' onPress={this.closeDayDialog}/>
    </View>
  )

  routeToProgram = (program) => () => {
    Actions.TSprogram({ program, title: program.title })
  }

  renderIcons = (id) => (
    <Icon
      iconStyle={{marginRight: 20}}
      size={20}
      name='trash'
      type='font-awesome'
      onPress={this.openDayDialog(id)}
    />
  ) 

  render() {
    const {
      dialogVisible
    } = this.state

    const {
      onDayChange,
      currentDate,
      loading,
      daySchedule,
    } = this.props

    return (
      <View style={styles.containter}>
        <DialogComponent
          title="Do you want to remove program?"
          visible={dialogVisible}
          onClose={this.closeDayDialog}
          renderContent={this.renderConfirm}
          width={300}
          height={300}
        />
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
