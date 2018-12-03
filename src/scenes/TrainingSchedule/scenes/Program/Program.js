import React from 'react'
import { View, Text, Image } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import { Card } from 'react-native-elements'

import { List, DialogComponent, ProgramDescription } from '../../../../components'

class Program extends React.Component {

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
    } = this.props

    return (
      <View style={{marginTop: 20}}>
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

export default Program
