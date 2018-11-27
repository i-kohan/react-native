import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


const ProgramDescription = () => {
  return (
    <View>
      <Text>Hello hfkashfkldsghfdkjashf ldshflksdjhfl</Text>
    </View>
  )
}

export const ProgramDescriptionScene = connect()(ProgramDescription)
