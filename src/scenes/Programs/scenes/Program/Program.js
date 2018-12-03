import React from 'react'
import { View, Text, Image, Picker, Button } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import { connect } from 'react-redux'
import { Card } from 'react-native-elements'


import { List, DialogComponent, ProgramDescription } from '../../../../components'
import { PICKER_OPTIONS } from './constants'

import * as selectors from '../../redux/selectors'
import * as actions from '../../redux/actions'

import styles from './styles'

const mapStateToProps = (state) => ({
  dialogState: selectors.getDialogState(state),
  selectedDay: selectors.getSelectedDay(state)
})

const mapDispatchToProps = (dispatch) => ({
  selectDay: (id) => dispatch(actions.selectDay(id)),
  assignProgram: (program, day) => dispatch(actions.assignProgram(program, day)),
  dialogLoading: () => dispatch(actions.dialogLoading),
  dialogClose: () => dispatch(actions.dialogClose),
  dialogOpen: () => dispatch(actions.dialogOpen),
})

class Program extends React.Component {

  componentDidMount() {
    this.props.navigation.setParams({ addProgram: this.openDayDialog })
  }

  openDayDialog = () => {
    this.props.dialogOpen()
  }

  assign = (program, selectedDay) => () => {
    this.props.dialogLoading()
    this.props.assignProgram(program, selectedDay)
  } 
 
  renderDayPicker = () => () => {
    const { selectedDay, assignProgram, selectDay, program } = this.props
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

  renderLeftElement = (item) => () => (
    <Image
      style={{ width: 30, height: 30 }}
      source={{ uri: item.icon }}
    />
  )

  renderIcons = () => () => (
    <Text>View more</Text>
  )

  renderCollapsibleArea = (item) => (
    <Text>{item.description}</Text>
  )

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
        <Card 
          title={program.title}
          image={{uri: 'http://piotrowicz.net/wp-content/uploads/2018/08/leg-day.png'}}  
        >
        <List
          renderIcons={this.renderIcons}
          renderLeftElement={this.renderLeftElement}
          noDataMessage='No available exersices'
          options={program.exercises}
          renderCollapsibleArea={this.renderCollapsibleArea}
        />
        </Card>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Program)
