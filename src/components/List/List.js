import React from 'react'
import PropTypes from 'prop-types'
import { withState, withHandlers, pure, compose } from 'recompose'
import { View, FlatList, ScrollView, Animated } from 'react-native'
import { ListItem } from 'react-native-elements'
import { TranslateYAndOpacity, ScaleAndOpacity } from 'react-native-motion'

import { NoDataMessage } from '../noDataMessage/noDataMessage.tsx'

import styles from './styles.js'

const renderItem = ({
  renderCollapsibleArea,
  renderIcons,
  renderLeftElement,
  onSelect,
  selected
}) => ({ item }) => {
  const isSelected = selected === item.id
  return (
    <View>
      <ListItem
        style={styles.item}
        title={item.title}
        leftElement={renderLeftElement && renderLeftElement(item)}
        rightElement={renderIcons && renderIcons(item)}
        subtitle={item.subtitle}
        onPress={onSelect(item.id)}
        checkbox
        topDivider
      />
      {isSelected && renderCollapsibleArea && (
        <ScaleAndOpacity duration={100}>
          {renderCollapsibleArea(item)}
        </ScaleAndOpacity>
      )}
    </View>
  )
}

const keyExtractor = item => item.id 

const List = ({
  noDataMessage,
  options,
  renderCollapsibleArea,
  renderIcons,
  renderLeftElement,
  onSelect,
  selected,
}) => {
  if (!options || !options.length) {
    return <NoDataMessage message={noDataMessage} />
  }
  return (
    // Hack to make FlatList scrollable
    // TODO: Remove this hack ~>
    <View style={{ marginBottom: 20 }}>
      <TranslateYAndOpacity
        startOnDidMount
        opacityMin={0}
        translateYMin={100}
        duration={10} 
      >
        <FlatList
          data={options}
          renderItem={renderItem({
            onSelect,
            selected,
            renderCollapsibleArea,
            renderIcons,
            renderLeftElement
          })}
          keyExtractor={keyExtractor}
          extraData={selected}
        />
      </TranslateYAndOpacity>
    </View>
  )
}

List.displayName = 'List'
List.propTypes = {
  noDataMessage: PropTypes.string,
  renderCollapsibleArea: PropTypes.func,
  renderIcons: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
}

export default compose(
  withState('selected', 'select', null),
  withHandlers({
    onSelect: ({ selected, select }) => id => () => {
      selected === id ? select(null) : select(id)
    }
  })
)(pure(List))
