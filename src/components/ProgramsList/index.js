import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { pure } from 'recompose'

import { Icon } from 'react-native-elements'
import styles from './styles'

const renderItem = ({ onClick, renderIcons }) => ({ item }) => (
  <ListItem
    title={item.title}
    rightIcon={(
      <View style={styles.icons}>
        {renderIcons && renderIcons(item.id)}
        <Icon
          name='chevron-right'
          type='font-awesome'
          size={15}
        />
      </View>
    )}
    subtitle="hello"
    onPress={onClick(item)}
  />
)

const ProgramsListComponent = ({ options, onClick, renderIcons }) => {
  if (!options || !options.length) {
    return (
      <View style={styles.noDataView}>
        <Text style={styles.noDataMessage}>No Programs</Text>
      </View>
    )
  }
  return (
    <FlatList
      style={styles.list}
      data={options}
      renderItem={renderItem({ onClick, renderIcons })}
      keyExtractor={(item) => item.id}
    />
  )
}

export const ProgramsList = pure(ProgramsListComponent)
