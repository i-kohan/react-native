import React from 'react'
import { View, Text, Image, ActivityIndicator, ScrollView, AsyncStorage } from 'react-native'

import { List } from '../../../../components'

import { setProgramThatDay } from '../../../../asyncStorage/setProgram'
import styles from './styles'
import { Button } from 'react-native';

class Program extends React.Component {

  state = {
    selectedExercise: ''
  }

  addToDay = async () => {
    const selected = this.state.selectedExercise
    setProgramThatDay(selected)
  } 

  onSelectExercise = (id) => {
    const isOpened = this.state.selectedExercise === id
    const selectedExercise = isOpened ? '' : id
    this.setState({ selectedExercise })
  }

  renderCollapsibleArea = (item) => {
    console.log(item.imageURL)
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
    const { selectedExercise } = this.state
    const {
      exercises,
      name,
      description
    } = this.props.program
    return (
      <ScrollView>
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
            onPress={this.addToDay}
          />
        </View>
      </ScrollView>
    )
  }
}

export const ProgramScene = Program
