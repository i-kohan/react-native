import React from 'react'
import moment from 'moment'
import { View, Text, Image, Picker, ScrollView, Button, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { List, DialogComponent, ProgramDescription } from '../../components'
import { PICKER_OPTIONS } from './constants' 

import { setProgramToSchedule } from '../../asyncStorage/programs'
import styles from './styles'



class Program extends React.Component {

  state = {
    selectedDay: moment().format('dddd'),
    dialogVisible: false,
  }

  componentDidMount() {
    this.props.navigation.setParams({ addProgram: this.openDayDialog })
  }

  openDayDialog = () => {
    this.setState({ dialogVisible: true })
  }
  
  closeDayDialog = () => {
    this.setState({ dialogVisible: false })
  }

  addToDay = (setDialogState) => async () => {
    const { program } = this.props
    const { selectedDay } = this.state
    setDialogState({ loading: true, title: 'Loading' })
    try {
      await setProgramToSchedule(program, selectedDay)
      setDialogState({ success: true, title: 'Loaded successfully' })
    } catch (err) {
      setDialogState({ failure: true, title: 'Loading failed' })
    }
  } 

  handleDayChange = (selectedDay) => this.setState({ selectedDay })

  renderDayPicker = (setDialogState) => () => {
    const { selectedDay } = this.state
    return (
      <View>
        <Text style={styles.descriptionItem}>Choose a day</Text>
        <Picker
          selectedValue={selectedDay}
          style={styles.picker}
          onValueChange={this.handleDayChange}
        >
          {PICKER_OPTIONS.map(opt => (
            <Picker.Item key={opt.id} label={opt.lable} value={opt.value} />
          ))}
        </Picker>
        <Button title='Set' onPress={this.addToDay(setDialogState)}/>
      </View>
    )
  }

  render() {
    const {
      dialogVisible
    } = this.state

    const {
      program,
    } = this.props

    return (
      <View>
        <DialogComponent
          visible={dialogVisible}
          onClose={this.closeDayDialog}
          renderContent={this.renderDayPicker}
          width={300}
          height={300}
        />
        <ProgramDescription program={program} />
      </View>
    )
  }
}

export const ProgramScene = Program
