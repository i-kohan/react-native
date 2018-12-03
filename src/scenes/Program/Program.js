import React from 'react'
import moment from 'moment'
import { View, Text, Image, Picker, ScrollView, Button, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ImageViewer from 'react-native-image-zoom-viewer'


import { List, DialogComponent, ProgramDescription } from '../../components'
import { PICKER_OPTIONS } from './constants' 

import { Card } from 'react-native-elements'

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
      dialogVisible
    } = this.state

    const {
      program,
    } = this.props

    return (
      <View style={{marginTop: 20}}>
        <DialogComponent
          visible={dialogVisible}
          title="Choose a day"
          onClose={this.closeDayDialog}
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

export const ProgramScene = Program
