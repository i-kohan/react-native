import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { getLoading } from './redux/selectors'
import { init } from './redux/actions'

import { DayScene } from './scenes'

import styles from './styles'

const mapStateToProps = state => ({
  loading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  init() {
    dispatch(init)
  }
})

class Home extends React.Component {
  componentDidMount() {
    this.props.init()
  }

  render() {
    const { loading } = this.props

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator style={styles.spinner} size="large" color="0000ff" />
        ) : (
          <DayScene />
        )}
      </View>
    )
  }
}

export const HomeScene = connect(mapStateToProps, mapDispatchToProps)(Home)
