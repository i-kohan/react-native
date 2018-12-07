import React from 'react'
import { View, Picker, Button } from 'react-native'
import { connect } from 'react-redux'

import { Program, DialogComponent, ModalContent } from '../../../../components'
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm'
import { PICKER_OPTIONS } from './constants'

import * as selectors from '../../redux/selectors'
import * as actions from '../../redux/actions'

import styles from './styles'

const mapStateToProps = (state) => ({
  dialogState: selectors.getDialogState(state),
  selectedDay: selectors.getSelectedDay(state),
  modalVisible: selectors.getModalVisibility(state),
  selectedProgram: selectors.getSelectedProgram(state)
})

const mapDispatchToProps = (dispatch) => ({
  assignProgram: (program, day) => dispatch(actions.assignProgram(program, day)),
  selectDay: (id) => dispatch(actions.selectDay(id)),
  dialogLoading: () => dispatch(actions.dialogLoading),
  dialogClose: () => dispatch(actions.dialogClose),
  dialogOpen: () => dispatch(actions.dialogOpen),
  modalOpen: () => dispatch(actions.modalOpen),
  modalClose: () => dispatch(actions.modalClose),
  handleExerciseCreate: (exercise, programId) => dispatch(actions.createExercise(exercise, programId))
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

  handleExerciseCreate = (exercise) => {
    this.props.modalClose()
    this.props.dialogLoading()
    this.props.handleExerciseCreate(exercise, this.props.selectedProgram)
  }
  
  handleAddPress = () => this.props.modalOpen()
 
  renderDayPicker = () => {
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
      dialogState,
      modalVisible,
      modalClose
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
        <Program {...program} addButton onAddPress={this.handleAddPress}/>
        <ModalContent visible={modalVisible} onClose={modalClose}>
          <AddExerciseForm onSubmit={this.handleExerciseCreate}/>
        </ModalContent>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramEdit)
