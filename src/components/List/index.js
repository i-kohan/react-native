import React from 'react'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { pure } from 'recompose'

import styles from './styles'

const renderItem = (onPressFn) => ({ item }) => {
  console.log(item)
  return (
  <ListItem
    title={item.title}
    rightIcon={{ name: 'chevron-right' }}
    subtitle={item.subtitle}
    onPress={onPressFn}
  />
)
}

const ListComponent = ({ options, onPressFn }) => { 
  console.log(options)
  return(
  <FlatList
    // style={styles.list}
    data={options}
    renderItem={renderItem(onPressFn)}
    keyExtractor={(item) => item.id}
  />
)
  }

export const List = pure(ListComponent)
