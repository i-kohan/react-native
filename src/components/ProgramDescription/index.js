import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'

import { List } from '../List'

import styles from './styles'

export class ProgramDescription extends React.Component {

  state = {
    selectedExercise: ''
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

  onSelectExercise = (id) => () => {
    const isOpened = this.state.selectedExercise === id
    const selectedExercise = isOpened ? '' : id
    this.setState({ selectedExercise })
  }

  render() {

    const {
      selectedExercise
    } = this.state

    const {
      program: {
        exercises,
        description
      },
      renderIcons
    } = this.props

    return (
      <ScrollView>
        <Text style={styles.descriptionProgramTitle}>Description of program:</Text>
        <Text style={styles.descriptionProgram}>{description}</Text>
        <List
          renderIcons={renderIcons}
          selectedItem={selectedExercise}
          onSelectExercise={this.onSelectExercise}
          options={exercises}
          renderCollapsibleArea={this.renderCollapsibleArea}
        />
      </ScrollView>
    )
  }
}