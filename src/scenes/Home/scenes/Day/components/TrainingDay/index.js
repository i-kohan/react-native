import React from 'react'
import { View, FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { pure } from 'recompose'

import styles from './styles'

const renderItem = (openModal) => ({ item }) => (
  <ListItem
    title={item.label}
    rightIcon={{ name: 'chevron-right' }}
    subtitle="hello"
    onPress={() => openModal(item.id)}
  />
)

export const TrainingDayComponent = ({ day, openModal }) => (
  <FlatList
    style={styles.list}
    data={day.schedule}
    renderItem={renderItem(openModal)}
    keyExtractor={(item) => item.id}
  />
)

export const TrainingDay = pure(TrainingDayComponent)
