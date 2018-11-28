import React from 'react'
import moment from 'moment'
import { View, Text, Image, Picker, ScrollView, Button, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { List, DialogComponent, ProgramDescription } from '../../components'
import { PICKER_OPTIONS } from './constants' 

import { setProgramThatDay } from '../../asyncStorage/setProgram'
import styles from './styles'



class Program extends React.Component {

  state = {
    selectedDay: moment().format('dddd'),
    dialog: {
      title: '',
      visible: false,
      loading: false,
      success: false,
      failure: false
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ addProgram: this.openDayDialog })
  }

  openDayDialog = () => {
    this.setState( state => ({ dialog: { ...state.dialog, visible: true, title: 'Choose day to add' } }))
  }
  
  closeDayDialog = () => {
    this.setState( state => ({ dialog: { ...state.dialog, visible: false } }))
  }

  addToDay = async () => {
    const { program } = this.props
    const { selectedDay } = this.state
    this.setState((state) => ({ dialog: { ...state.dialog, loading: true, title: 'Loading' } }))
    try {
      await setProgramThatDay(program, selectedDay)
      this.setState((state) => ({ dialog: { ...state.dialog, success: true, title: 'Loaded successfully' } }))
    } catch (err) {
      this.setState((state) => ({ dialog: { ...state.dialog, failure: true, title: 'Loading failed' } }))
    }
  } 

  handleDayChange = (selectedDay) => this.setState({ selectedDay })

  renderSuccess = () => (
    <View>
      <Text>Succes</Text>
      <Button title="Ok" onPress={this.closeDayDialog} />
    </View>
  )

  renderFailure = () => (
    <View>
      <Text>FAILURE</Text>
      <Button title="Ok" onPress={this.closeDayDialog} />
    </View>
  )

  renderLoading = () => (
    <ActivityIndicator size="large" color="0000ff" style={{alignSelf: 'center'}} />
  )

  getRenderFunc = ({ loading, success, failure }) => {
    let renderFn = this.renderDayPicker
    if (loading) renderFn = this.renderLoading
    if (success) renderFn = this.renderSuccess
    if (failure) renderFn = this.renderFailure
    return renderFn
  }

  renderDayPicker = () => {
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
        <Button title='Set' onPress={this.addToDay}/>
      </View>
    )
  }

  render() {
    const {
      dialog
    } = this.state

    const {
      program,
    } = this.props

    const renderDialogContentFn = this.getRenderFunc(dialog)
    return (
      <View>
        <DialogComponent
          visible={dialog.visible}
          title={dialog.title}
          onClose={this.closeDayDialog}
          width={300}
          height={300}
        >
          {renderDialogContentFn()}
        </DialogComponent>
        <ProgramDescription program={program} />
      </View>
    )
  }
}

export const ProgramScene = Program
