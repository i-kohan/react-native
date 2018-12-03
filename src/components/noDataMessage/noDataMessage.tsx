import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export const NoDataMessage = ({ message }) => (
  <View style={styles.noDataView}>
    <Text style={styles.noDataMessage}>{message}</Text>
  </View>
)
