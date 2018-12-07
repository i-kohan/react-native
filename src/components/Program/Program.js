import React from 'react'
import { View, Image, Text, Button } from 'react-native'
import { Card } from 'react-native-elements'

import List from '../List/List'

const renderLeftElement = (item) => () => (
  <Image
    style={{ width: 30, height: 30 }}
    source={{ uri: item.icon }}
  />
)

const renderIcons = () => () => (
  <Text>View more</Text>
)

const  renderCollapsibleArea = (item) => (
  <View>
    <Text>{item.description}</Text>
    <Image
      style={{ width: 150, height: 150 }}
      source={{ uri: item.imageURL }}
    />
  </View> 
)

const Program = ({
  title,
  imageURL,
  exercises,
  addButton,
  onAddPress
}) => (
  <View>
    <Card 
      title={title}
      image={{uri: imageURL}}

    >
      {addButton && <Button title="Add new exercise" onPress={onAddPress}/>}
      <List
        renderIcons={renderIcons}
        renderLeftElement={renderLeftElement}
        noDataMessage='No available exersices'
        options={exercises}
        renderCollapsibleArea={renderCollapsibleArea}
      />
    </Card>
  </View>
)

export default Program
