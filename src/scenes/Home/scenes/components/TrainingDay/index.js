import React from 'react'
import { View, FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'

import styles from './styles'

export const TrainingDay = ({ day }) => (
  <View>
    <FlatList
      style={styles.list}
      data={day.schedule}
      renderItem={(({ item }) => (
        <ListItem title={item.label} key={item.label} />
      ))}
    />
  </View>
)
