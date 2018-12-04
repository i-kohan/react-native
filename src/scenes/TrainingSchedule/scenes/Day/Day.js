import React from 'react'
import { connect } from 'react-redux'
import { View, ActivityIndicator, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import { CalendarHeader } from './components'
import { DialogComponent, List, TouchableIcon } from '../../../../components'

import { removeProgram } from '../../../../asyncStorage/schedule'

import { getCurrentDate, getLoading, getDaySchedule, getDialogState, getSelectedProgram } from './redux/selectors'
import { dayChange, init, removeProgramAct, dialogOpen, dialogClose, selectProgram, dialogLoading } from './redux/actions'

import styles from './styles'

const mapStateToProps = state => ({
  currentDate: getCurrentDate(state),
  loading: getLoading(state),
  daySchedule: getDaySchedule(state),
  dialogState: getDialogState(state),
  selectedProgram: getSelectedProgram(state)
})

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init),
  onDayChange: (days) => dispatch(dayChange(days)),
  removeProgram: (id) => dispatch(removeProgramAct(id)),
  dialogOpen: () => dispatch(dialogOpen),
  dialogClose: () => dispatch(dialogClose),
  dialogLoading: () => dispatch(dialogLoading),
  selectProgram: (id) => dispatch(selectProgram(id))
})

class Day extends React.PureComponent {

  state = {
    programIdRemove: '',
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

  removeProgram = () => {
    this.props.dialogLoading()
    this.props.removeProgram(this.props.selectedProgram)
  }

  openDialog = (id) => () => {
    this.props.selectProgram(id)
    this.props.dialogOpen()
  }

  renderConfirm = () => () => (
    <View style={styles.confirmButtons}>
      <View style={{marginRight: 8}} >
        <Button title='Yes' onPress={this.removeProgram} />
      </View>
      <Button title='No' onPress={this.props.dialogClose}/>
    </View>
  )

  routeToProgram = (program) => () => {
    Actions.TSprogram({ program, title: program.title })
  }

  renderIcons = (item) => (
    <View style={styles.icons}>
      <TouchableIcon
        style={styles.iconRemove}
        iconSize={25}
        iconName='trash'
        onClick={this.openDialog(item.id)}
      />
      <TouchableIcon
        style={styles.iconGoTo}
        iconSize={15}
        iconName='chevron-right'
        onClick={this.routeToProgram(item)}
      />
    </View>
  ) 

  render() {
    const {
      onDayChange,
      currentDate,
      loading,
      daySchedule,
      dialogState
    } = this.props

    return (
      <View style={styles.containter}>
        <DialogComponent
          loading={dialogState.loading}
          title={dialogState.title}
          success={dialogState.success}
          failure={dialogState.failure}
          visible={dialogState.isVisible}
          onClose={this.props.dialogClose}
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
          <List
            noDataMessage="No specified programs"
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
