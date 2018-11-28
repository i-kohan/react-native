import React from 'react'
import moment from 'moment'
import { View, Text, Image, Picker, ScrollView, Alert, Button, ActivityIndicator } from 'react-native'

import { List, DialogComponent } from '../../../../components'
import { PICKER_OPTIONS } from './constants' 

import { setProgramThatDay } from '../../../../asyncStorage/setProgram'
import styles from './styles'



class Program extends React.Component {

  state = {
    selectedDay: moment().format('dddd'),
    selectedExercise: '',
    dialog: {
      title: '',
      visible: false,
      loading: false,
      success: false,
      failure: false
    }
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

  onSelectExercise = (id) => {
    const isOpened = this.state.selectedExercise === id
    const selectedExercise = isOpened ? '' : id
    this.setState({ selectedExercise })
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
          style={{ height: 150, width: 250 }}
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

  renderCollapsibleArea = (item) => {
    return (
      <View>
        <View style={styles.areaItem}>
          <Text style={styles.descriptionItemTitle}>Description:</Text>
          <Text style={styles.descriptionItem}>{item.description}</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{ uri: item.imageURL }}
          />
        </View>
      </View>
    )
  }

  render() {
    const {
      selectedExercise,
      dialog
    } = this.state

    const {
      exercises,
      description
    } = this.props.program

    const renderDialogContentFn = this.getRenderFunc(dialog)

    return (
      <ScrollView>
        <DialogComponent
          visible={dialog.visible}
          title={dialog.title}
          onClose={this.closeDayDialog}
          // actions={[{ text: 'Close', onPress: () => console.log('hello') }]}
          width={300}
          height={300}
        >
          {renderDialogContentFn()}
        </DialogComponent>
        <Text style={styles.descriptionProgramTitle}>Description of program:</Text>
        <Text style={styles.descriptionProgram}>{description}</Text>
        <List
          selectedItem={selectedExercise}
          onPressFn={this.onSelectExercise}
          options={exercises}
          renderCollapsibleArea={this.renderCollapsibleArea}
        />
        <View style={styles.assignButton}>
          <Button
            title="Assign this program to shedule"
            onPress={this.openDayDialog}
          />
        </View>
      </ScrollView>
    )
  }
}

export const ProgramScene = Program
