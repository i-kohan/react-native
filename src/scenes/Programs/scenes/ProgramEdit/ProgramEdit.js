import React from 'react'
import { View, Text, Image, Picker, Button } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import { connect } from 'react-redux'

import { Program, DialogComponent } from '../../../../components'
import { PICKER_OPTIONS } from './constants'

import * as selectors from '../../redux/selectors'
import * as actions from '../../redux/actions'

import styles from './styles'

const mapStateToProps = (state) => ({
  dialogState: selectors.getDialogState(state),
  selectedDay: selectors.getSelectedDay(state)
})

const mapDispatchToProps = (dispatch) => ({
  assignProgram: (program, day) => dispatch(actions.assignProgram(program, day)),
  selectDay: (id) => dispatch(actions.selectDay(id)),
  dialogLoading: () => dispatch(actions.dialogLoading),
  dialogClose: () => dispatch(actions.dialogClose),
  dialogOpen: () => dispatch(actions.dialogOpen),
})

class ProgramEdit extends React.Component {

  componentDidMount() {
    this.props.navigation.setParams({ assignProgramDialog: this.openDayDialog })
  }

  openDayDialog = () => {
    this.props.dialogOpen()
  }

  assign = (program, selectedDay) => () => {
    this.props.dialogLoading()
    this.props.assignProgram(program, selectedDay)
  } 
 
  renderDayPicker = () => () => {
    const { selectedDay, selectDay, program } = this.props
    return (
      <View>
        <Picker
          selectedValue={selectedDay}
          style={styles.picker}
          onValueChange={selectDay}
        >
          {PICKER_OPTIONS.map(opt => (
            <Picker.Item key={opt.id} label={opt.lable} value={opt.value} />
          ))}
        </Picker>
        <Button title='Set' onPress={this.assign(program, selectedDay)}/>
      </View>
    )
  }

  render() {
    const {
      program,
      dialogState
    } = this.props
    return (
      <View style={{marginTop: 20}}>
        <DialogComponent
          loading={dialogState.loading}
          title={dialogState.title}
          success={dialogState.success}
          failure={dialogState.failure}
          visible={dialogState.isVisible}
          onClose={this.props.dialogClose}
          renderContent={this.renderDayPicker}
          width={300}
          height={300}
        />
        <Program {...program} />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramEdit)
