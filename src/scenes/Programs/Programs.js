import React from 'react'
import { View, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { getPrograms, getLoading } from './redux/selectors'
import { init } from './redux/actions'

import { List, TouchableIcon } from '../../components'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import styles from './styles'

const mapStateToProps = state => ({
  programs: getPrograms(state),
  loading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init)
})

class Programs extends React.Component {

  componentDidMount() {
    this.props.init()
  }

  routeToProgram = (program) => () => {
    Actions.Pprogram({ program, title: program.title })
  }

  renderIcons = (item) => () => (
    <View style={styles.icons}>
      <TouchableIcon
        style={styles.iconGoTo}
        iconSize={15}
        iconName='chevron-right'
        onClick={this.routeToProgram(item)}
      />
    </View>
  )

  render() {
    const {
      programs,
      loading
    } = this.props

    return (
      <View style={styles.programs}>
        {loading ? (
          <ActivityIndicator size="large" color="0000ff" />
        ) : (
          <List
            options={programs}
            onClick={() => console.log('helo')}
            noDataMessage={'No available programs'}
            renderIcons={this.renderIcons}
          />
        )}
      </View>
    )
  }
}

export const ProgramsScene = connect(mapStateToProps, mapDispatchToProps)(Programs)
