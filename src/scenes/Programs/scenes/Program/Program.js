import React from 'react'
import { connect } from 'react-redux'
import { withProps, compose } from 'recompose'
import { View, Text, Image, ActivityIndicator } from 'react-native'

import { List } from '../../../../components'

import { getProgramById } from '../../redux/selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    program: getProgramById(ownProps.id)(state),
  }
}

const Program = ({ program }) => {
  const {
    exercises,
    name,
    title
  } = program
  return (
    <View>
      <Text>{title}</Text>
      <List
        onPressFn={() => console.log(123)}
        options={exercises}
      />
    </View>
  )
}

export const ProgramScene = connect(mapStateToProps)(Program)
