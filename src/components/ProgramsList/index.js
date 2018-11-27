import React from 'react'
import { View, FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { pure } from 'recompose'

import styles from './styles'

const renderItem = (onClick) => ({ item }) => (
  <ListItem
    title={item.title}
    rightIcon={{ name: 'chevron-right' }}
    subtitle="hello"
    onPress={onClick(item.id)}
  />
)

const ProgramsListComponent = ({ options, onClick }) => (
  <FlatList
    style={styles.list}
    data={options}
    renderItem={renderItem(onClick)}
    keyExtractor={(item) => item.id}
  />
)

export const ProgramsList = pure(ProgramsListComponent)
