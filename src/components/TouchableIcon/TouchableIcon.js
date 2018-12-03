import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import styles from './styles';

const TouchableIcon = ({ onClick, onIconClick, iconName, iconSize, style }) => (
  <TouchableOpacity style={{ ...styles.icon, ...style }} onPress={onClick}>
    <Icon onPress={onIconClick} name={iconName} size={iconSize} type="font-awesome"/>
  </TouchableOpacity>
)

export default TouchableIcon
