import React from 'react'
import { View, FlatList, Text, Animated } from 'react-native'
import { ListItem } from 'react-native-elements'
import { pure } from 'recompose'

import styles from './styles'

const renderItem = (
  onPressFn,
  selectedItem,
  renderCollapsibleArea
) => ({ item }) => {
  const selected = selectedItem === item.id
  const rightIconName = selected ? 'chevron-down' : 'chevron-right'
  return (
    <View>  
      <ListItem
        title={item.title}
        rightIcon={{ name: rightIconName, type: 'font-awesome', size: 15 }}
        subtitle={item.subtitle}
        onPress={() => onPressFn(item.id)}
      />
      {selected && renderCollapsibleArea && renderCollapsibleArea(item)}
    </View>
  )
}

const ListComponent = ({ options, onPressFn, selectedItem, renderCollapsibleArea }) => {
    return(
      <FlatList
        data={options}
        renderItem={renderItem(onPressFn, selectedItem, renderCollapsibleArea)}
        keyExtractor={(item) => item.id}
        extraData={selectedItem}
      />
    )
}

export const List = pure(ListComponent)
