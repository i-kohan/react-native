import React from 'react'
import { View, FlatList, Text, Animated } from 'react-native'
import { ListItem } from 'react-native-elements'
import { pure } from 'recompose'
import { Icon } from 'react-native-elements'

import styles from './styles'

const renderItem = ({
  onSelectExercise,
  selectedItem,
  renderCollapsibleArea,
  renderIcons
}) => ({ item }) => {
  const selected = selectedItem === item.id
  const rightIconName = selected ? 'chevron-down' : 'chevron-right'
  return (
    <View>  
      <ListItem
        title={item.title}
        rightIcon={(
          <View style={styles.icons}>
            {renderIcons && renderIcons(item.id)}
            <Icon
              name={rightIconName}
              type='font-awesome'
              size={15}
              onPress={onSelectExercise(item.id)}
            />
          </View>
        )}
        subtitle={item.subtitle}
      />
      {selected && renderCollapsibleArea && renderCollapsibleArea(item)}
    </View>
  )
}

const ListComponent = ({
  options,
  onSelectExercise,
  selectedItem,
  renderCollapsibleArea,
  renderIcons
}) => (
  <FlatList
    data={options}
    renderItem={renderItem({
      onSelectExercise,
      selectedItem,
      renderCollapsibleArea,
      renderIcons
    })}
    keyExtractor={(item) => item.id}
    extraData={selectedItem}
  />
)

export const List = pure(ListComponent)
